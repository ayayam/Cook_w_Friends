const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.render('pages/home', {

    });
});

app.get('/register', (req, res) => {
    res.render('pages/register', {

    });
});

app.get('/contact_us', (req, res) => {
    res.render('pages/contact_us', {

    });
});

app.get('/login', (req, res) => {
    res.render('pages/login', {

    });
});

app.get('/cookbook', (req, res) => {
    res.render('pages/cookbook', {

    });
});

app.get('/friend_profile', (req, res) => {
    res.render('pages/friend_profile', {

    });
});

app.get('/friends', (req, res) => {
    res.render('pages/friends', {

    });
});

app.get('/profile_edit', (req, res) => {
    res.render('pages/profile_edit', {

    });
});

app.get('/profile', (req, res) => {
    res.render('pages/profile', {

    });
});

app.get('/recipe', (req, res) => {
    res.render('pages/recipe', {

    });
});

app.get('/search', (req, res) => {
    res.render('pages/search', {

    });
});

app.get('/shopping_list', (req, res) => {
    res.render('pages/shopping_list', {

    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});