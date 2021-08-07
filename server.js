const express = require("express");
const session = require("express-session");
const passport = require('passport');
require('./auth');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}
