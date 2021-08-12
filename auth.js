const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const GOOGLE_CLIENT_ID = '562475838968-3llgpi6b5i9hikheb3vdr0mtg6bid9o3.apps.googleusercontent.com';
//const GOOGLE_CLIENT_SECRET = 'XHqHpjy-mPFqqcEeEnEMkrev';

passport.use(new GoogleStrategy({
    clientID: '562475838968-3llgpi6b5i9hikheb3vdr0mtg6bid9o3.apps.googleusercontent.com',
    clientSecret: 'XHqHpjy-mPFqqcEeEnEMkrev',
    callbackURL: "http://localhost:3001/google/callback",
    
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

  app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }); 

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
      done(null, user);
  });
});
