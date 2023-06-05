const User = require('../models/user-model');


module.exports = {
    landing_page: (req, res) => {
        const user = req.user
        res.render('pages/user_landing', {user: user});
    },
}
