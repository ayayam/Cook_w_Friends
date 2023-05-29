// Profile model schema to be created

const User = require("../models/recipe-model");

module.exports = {
    profile_get: (req, res) => {
        res.render('pages/profile');
    },

    profile_edit_put: (req, res) => {
        const {_id} = req.params;
        const {picture, name, nickname, bio} = req.body;
        Profiles.findByIdAndUpdate(_id, {$set: {
            picture: picture,
            name: name,
            nickname: nickname,
            bio: bio
        }}, {new: true})
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err)
        })
    },

    profile_edit_get: (req, res) => {
        const { _id } = req.params;
        User.findOne({_id: _id})
            .then(user => {
                res.render('pages/profile_edit', {
                    user: user
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}