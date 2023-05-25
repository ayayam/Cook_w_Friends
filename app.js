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
// app.get('/', (req, res) => {
//     res.render('pages/home', {

//     });
// });

// app.get('/register', (req, res) => {
//     res.render('pages/register', {

//     });
// });

// app.get('/contact_us', (req, res) => {
//     res.render('pages/contact_us', {

//     });
// });

// app.get('/login', (req, res) => {
//     res.render('pages/login', {

//     });
// });

// app.get('/cookbook', (req, res) => {
//     res.render('pages/cookbook', {

//     });
// });

// app.get('/friend_profile', (req, res) => {
//     res.render('pages/friend_profile', {

//     });
// });

// app.get('/friends', (req, res) => {
//     res.render('pages/friends', {

//     });
// });

// app.get('/profile_edit', (req, res) => {
//     res.render('pages/profile_edit', {

//     });
// });

// app.get('/profile', (req, res) => {
//     res.render('pages/profile', {

//     });
// });

// app.get('/recipe', (req, res) => {
//     res.render('pages/recipe', {

//     });
// });

// app.get('/create_recipe', (req, res) => {
//     res.render('pages/create_recipe', {
        
//     })
// })
// app.get('/update_recipe', (req, res) => {
//     res.render('pages/update_recipe', {
        
//     })
// })

// app.get('/search', (req, res) => {
//     res.render('pages/search', {

//     });
// });

// app.get('/shopping_list', (req, res) => {
//     res.render('pages/shopping_list', {

//     });
// });

