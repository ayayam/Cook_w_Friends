

module.exports = {
    home: (req, res) => {
        res.render('pages/home', {});
    },

    login_get: (req, res) => {
        res.render('pages/login', {});
    },

    login_post: (req, res) => {
        // const {username, password} = request.body;
        // const user = new User({
        //     username: username,
        //     password: password
        // });
        // req.login
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
        
    }
}