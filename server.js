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

app.get("/", (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile' ] })
)

app.get('/google/callback',
  passport.authenticate('google', {
      successRedirect: '/protected',
      failureRedirect: '/auth/failure',
  })
);

app.get('/auth/failure', (req, res) =>{
    res.send('Something went wrong!')
});

app.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Welcome! ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
    req.logout();
    res.session.destroy();
    res.send('Goodbye!');
});

app.listen(PORT, () => console.log('Now Listening'));
