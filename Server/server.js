const express = require('express');
const app = express();
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const connectDb = require('./config/connect');
const user_router = require('./Routes/User_routes');
require('dotenv').config();

// Connect to MongoDB
connectDb(process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());


passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  
  done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


app.get('/ping', (req, res) => {
  res.send('<h1>pong</h1>');
});

app.use("/user", user_router);


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    
    res.redirect('/profile');
  }
);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
