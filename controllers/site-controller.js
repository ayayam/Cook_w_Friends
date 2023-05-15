

module.exports = {
    home: (req, res) => {
        res.render('pages/home', {});
    },
    login: (req, res) => {
        res.render('pages/login', {});
    },
    contact_us: (req, res) => {
        res.render('pages/contact_us', {});
    }
}