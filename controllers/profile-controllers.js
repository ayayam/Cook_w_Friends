
const Users = require("../models/user-model");

module.exports = {
    profile_get: (req, res) => {
        const {_id} = req.params;
        Users.findOne({_id: _id})
        .then((users) => {
            console.log(users);
            res.render('pages/profile', {
                users: users
            });
        })
        .catch((err) => {
            console.log(err);
        })
    },

    profile_edit_put: (req, res) => {
        const {_id} = req.params;
        const {avatar, firstName, lastName, bio} = req.body;
        Users.findByIdAndUpdate(_id, {$set: {
            avatar: avatar,
            firstName: firstName,
            lastName: lastName,
            bio: bio
        }}, {new: true})
        .then(() => {
            res.redirect('pages/profile')
        })
        .catch((err) => {
            console.log(err)
        })
    },

    profile_edit_get: (req, res) => {
        const { _id } = req.params;
        Users.findOne({_id: _id})
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