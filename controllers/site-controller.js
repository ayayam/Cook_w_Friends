const User = require('../models/user-model');
const passport = require('passport');

module.exports = {
    home: (req, res) => {
        res.render('pages/home', {});
    },

    login_get: (req, res) => {
        res.render('pages/login', {});
    },

    login_post: (req, res) => {
        const {username, password} = req.body;
        const user = new User({
            username: username,
            password: password
        });
        req.login(user, (err) => {
            if (err) {
                console.log(err)
                res.redirect('/login');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/user/_:id/profile')
                }) 
            }
        })
    },

    contact_us_get: (req, res) => {
        res.render('pages/contact_us', {});
    },

    contact_us_post: (req, res) => {
        
    },

    register_get: (req, res) => {
        res.render('pages/register', {});
    },

    register_post: (req, res) => {
        User.register({username: req.body.username}, req.body.password, (err, user) => {
            if (err) {
                console.log(err);
                res.redirect('/register');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/user/_:id/profile/')
                });
            }
        });
    },

    search_get: (req, res) => {
        res.render('pages/search')
    },

    search_post: (req, res) => {
        
    },

    google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email']}),

    google_redirect_get: [
        passport.authenticate('google', {failureRedirect: '/login'}), function(req, res) {
            res.redirect('/user/_:id/profile');
            alert("You are logged in");
        }
    ],

    logout: (req, res) => {
        req.logout(function(err) {
            if (err) {return next(err);}
            res.redirect('/');
        })
    }
}