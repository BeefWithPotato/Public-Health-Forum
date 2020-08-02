'use strict'
const express = require('express');
const session = require('express-session');
const path = require('path');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

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
app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
