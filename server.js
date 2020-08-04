'use strict'
const express = require('express');
const session = require('express-session');
const path = require('path');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const User = require('./models/User');

const app = express();
app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
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

app.use(express.static(path.join(__dirname, '/client/build')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
})

module.exports = app;
