require('./auth');
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const passport = require("passport");

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


const exphbs = require("express-handlebars");
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });
//const hbs = exphbs.create("view engine", "handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

app.use(
  session({
    secret: "Super secret secret",
    cookie: {
      maxAge: 1800000,
    },
    rolling: true,
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);
 


// app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening localhost:3001"));
});

