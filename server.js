'use strict'
const express = require('express');
const session = require('express-session');
const path = require('path');
const fs = require('fs');
const mineType = require("mime-types");
const bodyParser = require('body-parser');
const logger = require('morgan');
const User = require('./models/User');
const TopicInstance = require('./models/topic');
const mongoose = require("mongoose");

const app = express();
app.use(logger('dev'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 300000,
        httpOnly: true
    }
}));

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
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
            res.status(500).send("Server Internal Error");
        } else res.send();
    });
});

app.get("/verify", (req, res) =>
    (req.session.user_id) ? res.send({ current: req.session.username, role: req.session.role }) : res.status(401).send()
);

app.post("/register", ((req, res) => {
    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }
    const url = path.join(__dirname, "uploads/avatar.png");
    const data = Buffer.from(fs.readFileSync(url)).toString("base64");
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        avatar: "data:" + mineType.lookup(url) + ";base64," + data
    });

    user.save().then(user => {
        req.session.user_id = user._id;
        req.session.username = user.username;
        req.session.role = user.role;
        res.send({ current: user.username, role: user.role });
    }).catch(_ => res.status(500).send("Server Internal Error"));
}));

// update user info
app.patch("/user", ((req, res) => {
    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }
    const id = req.session.user_id;
    User.findOneAndUpdate(
        { "_id": id },
        {
            "$set": {
                "email": req.body.email,
                "gender": req.body.gender,
                "phone": req.body.phone,
                "address": req.body.address,
            }
        },
        {new: true, useFindAndModify: false}
    ).then(user => {
        if (!user) res.status(404).send();
        else res.send(user);
    }).catch(error => {
        console.log(error);
        res.status(400).send("Bad Request");
    });
}));

//modify user.role and user.verification info
app.patch("/user/:content", ((req, res) => {
    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }
    const content = req.params.content;
    if(content === "admin"){
        const id = req.body.userid;
        User.findOne({_id: id}).then((user) => {
            if (!user) {
                res.status(404).send('Resource not found')
            } else {
                console.log("find user");
                user.role = "admin";
                user.save().then(
                    result => {
                        res.send(result);
                    },
                    error => {
                        console.log("server error");
                        console.log(error)
                        res.status(400).send(error);
                    }
                );
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send('Bad Request');
        })
    }
    else if(content === "verification"){
        const description = req.body.description;
        const id = req.body.userid;
        User.findOne({_id: id}).then((user) => {
            if (!user) {
                res.status(404).send('Resource not found')
            } else {
                console.log("find user");
                user.verification = description;
                user.save().then(
                    result => {
                        res.send(result);
                    },
                    error => {
                        console.log("server error");
                        console.log(error)
                        res.status(400).send(error);
                    }
                );
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send('Bad Request');
        })
    }
}));

//get all topics
app.get("/topics", (req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }

    TopicInstance.find().then(
        topics => {
            console.log();
            res.send({ topics });
        },
        error => {
            res.status(500).send('Internal Error'); // server error
        }
    );
});

//get all posts under current topic
app.get("/posts/:topic", (req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }

    const title = req.params.topic;

    TopicInstance.findOne({title: title}).then((topic) => {
        if (!topic) {
            res.status(404).send('Resource not found')
        } else {
            console.log("find topic and sending posts");
            const posts = topic.posts;
            res.send({ posts });
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).send('Server connection error');
    })
});

//get all comments under current post
app.get("/comments/:topic/:postid", (req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }

    const title = req.params.topic;
    const postid = req.params.postid

    TopicInstance.findOne({title: title}).then((topic) => {
        if (!topic) {
            res.status(404).send('Resource not found')
        } else {
            console.log("find topic and sending posts");
            console.log(topic.posts[postid-1].content);
            const comments = topic.posts[postid-1].comments;
            console.log("sending")
            res.send({ comments });
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).send('Server connection error');
    })
});

//create a new topic
app.post("/topics", ((req, res) => {
	
	if (mongoose.connection.readyState != 1) {
		res.status(500).send('Server connection error');
		return;
	}

	let userid;
	User.findOne({username: req.body.username}).then((user) => {
		if (!user) {
			res.status(404).send('Resource not found')
		} else {
			console.log("find user");
			console.log(user._id);
			userid = user._id;
		}
	})
	.catch((error) => {
		console.log(error);
		res.status(500).send('Server connection error');
	})

	TopicInstance.findOne({title: req.body.title}).then((topic) => {
		if (topic) {
			res.status(409).send("Duplicate topic!");
		}
		else{
			console.log("no Duplicate")
			console.log(req.body.title)
			const topic = new TopicInstance({
				title: req.body.title,
				likes: 0, 
				img: req.body.img,
				creatorUsername: req.body.username,
				creatorId: userid,
				posts: []
			});

			topic.save().then(
				result => {
					res.send(result);
				},
				error => {
					console.log("server error");
					console.log(error)
					res.status(400).send(error);
				}
			);
		}
	})
}));

//create a new post under current topic
app.post("/posts", ((req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }

    console.log(req.body);

    let userid = null;
    let avatar = null;
    User.findOne({username: req.body.username}).then((user) => {
        if (!user) {
            res.status(404).send('Resource not found')
        } else {
            console.log("find user");
            console.log(user._id);
            userid = user._id;
            avatar = user.avatar;
        }
    })

    TopicInstance.findOne({title: req.body.topic}).then((topic) => {
        if (!topic) {
            res.status(404).send('Resource not found')
        } else {
            console.log("find topic");

            const newPost = {
                content: req.body.content,
                likes: 0,
                avatar: avatar,
                creatorUsername: req.body.username,
                id: topic.posts.length + 1,
                creatorId: userid,
                comments: []
            };

            topic.posts.push(newPost);
            topic.save().then(
                result => {
                    res.send(result);
                },
                error => {
                    console.log("server error");
                    res.status(400).send(error);
                }
            );
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).send('Server connection error');
    })

}));

//create a new comment under current post
app.post("/comments", ((req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }
    console.log(req.body)
    let userid = null;
    let avatar = null;
    User.findOne({username: req.body.username}).then((user) => {
        if (!user) {
            res.status(404).send('Resource not found')
        } else {
            console.log("find user");
            console.log(user._id);
            userid = user._id;
            avatar = user.avatar;
        }
    })

    const postid = req.body.postid;
    TopicInstance.findOne({title: req.body.topic}).then((topic) => {
        if (!topic) {
            res.status(404).send('Resource not found')
        } else {
            console.log("find topic");

            const newComment = {
                content: req.body.content,
                likes: 0,
                avatar: avatar,
                id: topic.posts[postid-1].comments.length + 1,
                creatorUsername: req.body.username,
                creatorId: userid,
            };

            topic.posts[postid-1].comments.push(newComment);

            topic.save().then(
                result => {
                    res.send(result);
                },
                error => {
                    console.log("server error");
                    res.status(400).send(error);
                }
            );
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).send('Server connection error');
    })

}));

/// updating likes count
app.post('/likes/:type', (req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }

    const type = req.params.type;
    if(type === "topic"){
        const title = req.body.title;
        const creatorUsername = req.body.creatorUsername;
        console.log(req.body.likes);
        if (mongoose.connection.readyState !== 1) {
            res.status(500).send('Server connection error');
            return;
        }

        TopicInstance.findOne({title: title, creatorUsername: creatorUsername}).then((topic) => {
            if (!topic) {
                res.status(404).send('Resource not found')
            } else {
                topic.likes++;
                topic.save();
                res.send(result);
            }
        }).catch((error) => {
            console.log(error)
            res.status(500).send('Server connection error');
        })
    }
    else if(type === "post"){
        const id = req.body.id;
        const topic = req.body.topic;

        TopicInstance.findOne({title: topic}).then(topic => {
            if (!topic) {
                res.status(404).send();
            } else {
                topic.posts.forEach((post) => {
                    if(post.id === id){
                        post.likes++;
                    }
                });

                topic.save();
                res.send(result);
            }
        }).catch(error => {
            console.log(error);
            res.status(500).send();
        });
    }
    else if(type === "comment"){
        const id = req.body.id;
        const topic = req.body.topic;
        const postid = req.body.postid;

        TopicInstance.findOne({title: topic}).then(topic => {
            if (!topic) {
                res.status(404).send();
            } else {

                topic.posts[postid-1].comments.forEach((comment) => {
                    if(comment.id === id){
                        comment.likes++;
                    }
                });

                topic.save();
                res.send(result);
            }
        }).catch(error => {
            console.log(error);
            res.status(500).send();
        });
    } else {
        res.status(400).send('Bad Request')
    }

})

//remove a topic
app.delete("/topics", (req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }

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
        	console.log(error);
            res.status(500).send();
        });
});

//delete a post from current topic
app.delete("/posts", (req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }

    const id = req.body.id;
    const topic = req.body.topic;
    // Delete a topic by creator and content
    TopicInstance.findOne({title: topic}).then(topic => {
        if (!topic) {
            res.status(404).send();
        } else {
            const filterPost = topic.posts.filter((post) => {
                return (post.id !== id);
            });

            let num = 1;
            for(let i = 0; i < filterPost.length; i++){
                filterPost[i].id = num;
                num++;
            }

            topic.posts = filterPost;
            topic.save();
            res.send(topic);
        }
    }).catch(error => {
        console.log(error);
        res.status(500).send();
    });
});

//delete a comment from current post
app.delete("/comments", (req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }

    const id = req.body.id;
    const topic = req.body.topic;
    const postid = req.body.postid;

    TopicInstance.findOne({title: topic}).then(topic => {
        if (!topic) {
            res.status(404).send();
        } else {

            const filterComments = topic.posts[postid-1].comments.filter((comment) => {
                return (comment.id !== id)
            });

            let num = 1;
            for(let i = 0; i < filterComments.length; i++){
                filterComments[i].id = num;
                num++;
            }
            topic.posts[postid-1].comments = filterComments;

            topic.save();
            res.send(topic);
        }
    }).catch(error => {
        console.log(error);
        res.status(500).send();
    });
});

//cancel a like
app.delete("/likes/:type", (req, res) => {
    const type = req.params.type;

    if(type === "topic"){
        const title = req.body.title;
        const creatorUsername = req.body.creatorUsername;
        console.log(req.body.likes);
        if (mongoose.connection.readyState !== 1) {
            res.status(500).send('Server connection error');
            return;
        }

        TopicInstance.findOne({title: title, creatorUsername: creatorUsername}).then((topic) => {
            if (!topic) {
                res.status(404).send('Resource not found')
            } else {
                if(topic.likes !== 0){
                    topic.likes--;
                }
                topic.save();
                console.log(topic.likes);
                res.send(topic);
            }
        }).catch(() => {
            res.status(500).send('Server connection error');
        })
    }
    else if(type === "post"){
        const id = req.body.id;
        const topic = req.body.topic;

        TopicInstance.findOne({title: topic}).then(topic => {
            if (!topic) {
                res.status(404).send();
            } else {
                topic.posts.forEach((post) => {
                    if(post.id === id){
                        if(post.likes !== 0){
                            post.likes--;
                        }
                    }
                });
                topic.save();
                res.send(topic);
            }
        }).catch(error => {
            console.log(error);
            res.status(500).send();
        });
    }
    else if(type === "comment"){
        const id = req.body.id;
        const topic = req.body.topic;
        const postid = req.body.postid;

        // Delete a like by id
        TopicInstance.findOne({title: topic}).then(topic => {
            if (!topic) {
                res.status(404).send();
            } else {

                topic.posts[postid-1].comments.forEach((comment) => {
                    if(comment.id === id && comment.likes !== 0){
                        comment.likes--;
                    }
                });

                topic.save();
                res.send(topic);
            }
        }).catch(error => {
            console.log(error);
            res.status(500).send();
        });
    }
    else{
        res.status(400).send('Bad Request')
    }
});

//get user data
app.get("/dashboard/data/:id", (req, res) => {

    if (mongoose.connection.readyState !== 1) {
        res.status(500).send('Server connection error');
        return;
    }
    const id = req.params.id;
    User.findOne({username: id}).then((user) => {
        if (!user) {
            res.status(404).send('Resource not found')
        } else {
            res.send(user);
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).send('Server connection error');
    })
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

module.exports = app;
