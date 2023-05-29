require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const PORT = 3000;
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

require('./config/connection');

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});

