const Sequelize = require('sequelize');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    });

// Use the GoogleStrategy withing Passport
// passport.use(new GoogleStrategy({
//     clientID: '592878734224-1ri6pfkmfslqvnv82ks1bs7n7scaljtn.apps.googleusercontent.com',
//     clientSecret: ' brXAKpG-7Pd0naS-_IEnhPP6',
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//     function (accessToken, refreshToken, profile, done) {
//       Teacher.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return done(err, user);
//       });
//     }
//   ));

module.exports = sequelize;