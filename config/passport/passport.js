// const bcrypt = require('bcrypt');

// module.exports = (passport, teacher) => {
//     const Teacher = teacher;
//     const LocalStrategy = require('passport-local').Strategy;

//     passport.serializeUser((teacher, done) => {
//         done(null, teacher.id);
//     });

//     // used to deserialize the teacher
//     passport.deserializeUser((id, done) => {
//         Teacher.findByPk(id).then(teacher => {
//             if(teacher) {
//                 done(null, teacher.get());
//             } else {
//                 done(teacher.errors, null);
//             }
//         });
//     });

//     passport.use(
//         'local',
//         new LocalStrategy(
//             {
//                 usernameField: 'email',
//                 passwordField: 'password',
//                 passReqToCallback: true
//             },
            
//             function (req, email, password, done) {
//                 var generateHash = password => {
//                     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//                 };

//                 Teacher.findOne({ where: { email: email } }).then(teacher => {
//                     if (teacher) {
//                         return done(null, false, {
//                             message: 'That Email Has Already Been Used'
//                         });
//                     } else {
//                         var userPassword = generateHash(password);
//                         var data = {
//                             email: email,
//                             first_name: req.body.first_name,
//                             last_name: req.body.last_name,
//                             password: userPassword,
//                         };

//                         Teacher.create(data).then((newUser, created) => {
//                             if(!newUser) {
//                                 return done(null, false);
//                             }

//                             if(newUser) {
//                                 return done(null, newUser);
//                             }
//                         });
//                     }
//                 });
//             }
//         )
//     );

//     // local signin
//     passport.use(
//         'local-login',
//         new LocalStrategy(
//             {
//                 // by default, local strategy uses username and password, we will override with email
//                 usernameField: 'email',
//                 passwordField: 'password',
//                 passReqToCallback: true
//             },

//             function (req, email, password, done) {
//                 var Teacher = teacher;

//                 var isValidPassword = (userpass, password) => {
//                     return bcrypt.compareSync(password, userpass);
//                 };

//                 Teacher.findOne({ where: { email: email } })
//                     .then(teacher => {
//                         if(!teacher) {
//                             return done(null, false, { message: 'Invalid Email' });
//                         }

//                         if (!isValidPassword(teacher.password, password)) {
//                             return done(null, false, { message: 'Incorrect Password' });
//                         }

//                         return done(null, teacher);
//                     })
//                     .catch(err => {
//                         console.log('Error:', err);

//                         return done(err, {
//                             message: 'Something went wrong with your Signin'
//                         });
//                     });
//             }
//         )
//     );
// };