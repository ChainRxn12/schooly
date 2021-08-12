const express = require('express');
const session = require('express-session');
const passport = require('passport');
const router = require('express').Router();

router.use('/', auth);

router.get('/', (req, res) => {
    res.send("login")
}); 

router.get('/homepage', (req, res) => {
    res.send("homepage")
}); 

module.exports = router;

require('./auth');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
};

const app = express();
app.use(session({ secret: "schooly"}));
app.use(passport.initialize());
app.use(passport.session());


app.get('./', (req, res) => {
    res.send('<a  href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile' ]})
)

app.get('/google/callback',
  passport.authenticate('google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/failure',
  })
  );

  app.get('/auth/failure', (res, res) => {
      res.send('Something Went Wrong');
  });

app.get('/protected', isLoggedIn, (req,res) => {
    res.send(`Hello ${req.user.displayname}`);
});

app.get('/logout', (req, res) => {
    req.logout();
    res.session.destroy();
    res.send("Goodbye")
});