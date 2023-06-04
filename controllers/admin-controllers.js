const User = require('../models/user-model');


module.exports = {
    landing_page: (req, res) => {
        res.render('pages/user_landing', {});
}
}
