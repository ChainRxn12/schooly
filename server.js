const express = require("express");
const session = require("express-session");
const passport = require('passport');
require('./auth');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

const app = express();
const PORT = process.env.PORT || 3001;
app.use(session({ secret: "Schooly" }));
app.use(passport.initialize());
app.use(passport.session());