//User model schema still needs to be created

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
                    res.redirect('/user/:id/profile')
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
        const {username, password} = req.body;
        User.register({username: username}, password, (err, user) => {
            if (err) {
                console.log(err);
                res.redirect('/register');
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/user/:id/profile/profile_edit')
                })
            }
        })
    },

    search_get: (req, res) => {
        res.render('pages/search')
    },

    search_post: (req, res) => {
        
    }
}