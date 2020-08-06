'use strict'
const log = console.log;
const express = require('express');
const session = require('express-session');
const path = require('path');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const User = require('./models/User');
const TopicInstance = require('./models/topic');

const MainPage = require('./models/');

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); // for some deprecation issues


// to validate object IDs
const { ObjectID } = require("mongodb");



const app = express();
app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//app.use(cookieParser());
app.use(session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000,
        httpOnly: true
    }
}));

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
	if (req.session.user_id) {
		User.findById(req.session.user_id).then((user) => {
			if (!user) {
				return Promise.reject()
			} else {
				req.user = user
				next()
			}
		}).catch((error) => {
			res.status(401).send("Unauthorized")
		})
	} else {
		res.status(401).send("Unauthorized")
	}
}

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    console.log(`username: ${username}, password: ${password}`);
    User.findByUsernameAndPassword(username, password).then(user => {
        req.session.user_id = user._id;
        req.session.username = user.username;
        req.session.role = user.role;
        res.send({ current: user.username, role: user.role });
    }).catch(error => {
        console.error(error);
        res.status(404).send();
    });
});

app.get("/logout", (req, res) => {
    req.session.destroy(error => {
        if (error) {
            console.error(error);
            res.status(500).send();
        } else res.send();
    });
});

app.get("/verify", (req, res) =>
    (req.session.user_id) ? res.send({ current: req.session.username, role: req.session.role }) : res.status(401).send()
);

app.post("/register", ((req, res) => {
    console.log(req.body);

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save().then(user => {
        req.session.user_id = user._id;
        req.session.username = user.username;
        req.session.role = user.role;
        res.send({ current: user.username, role: user.role });
    }).catch(error => res.status(400).send(error));
}));

//get MainPage
app.get("/MainPage", (req, res) => {
    MainPage.find().then(
        mainPage => {
            res.send({ mainPage })
        },
        error => {
            res.status(500).send(error)
        }
    )
});

//get Dashboard
app.get("/Dashboard", (req, res) => {
    Dashboard.find().then(
        dashboard => {
            res.send({ dashboard })
        },
        error => {
            res.status(500).send(error)
        }
    )
});

//get all topics
app.get("/topics", (req, res) => {
    TopicInstance.find().then(
        topics => {
            log();
            res.send({ topics }); 
        },
        error => {
            res.status(500).send(error); // server error
        }
    );
});


//create a new topic
app.post("/topics", ((req, res) => {

	log(req.body);
	const topic = new TopicInstance({
		title: req.body.title,
		id: req.body.id,
		likes: 0, 
		img: req.body.img,
		creatorUsername: req.session.username,
		creatorId: req.session.user_id,
		posts: []
	});
	
	topic.save().then(
		result => {
			res.send(result);
		},
		error => {
			res.status(400).send(error);
		}
	);
zz
}));

//remove a topic
app.delete("/topics", (req, res) => {
   

    const title = req.body.title;
    const creatorUsername = req.body.creatorUsername;

    // Delete a topic by creator and title
    TopicInstance.findOneAndDelete({title: title, creatorUsername: creatorUsername})
        .then(topic => {
            if (!topic) {
                res.status(404).send();
            } else {
                res.send(topic);
            }
        })
        .catch(error => {
            res.status(500).send(); // server error, could not delete.
        });
});

app.use(express.static(path.join(__dirname, '/client/build')));
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/postoverview", "/postpage", "/comment"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(__dirname + "/client/build/index.html");
})

//module.exports = app;

// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});
