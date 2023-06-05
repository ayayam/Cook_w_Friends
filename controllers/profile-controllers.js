
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
        const {firstName, lastName, bio} = req.body;
        Users.findByIdAndUpdate(_id, {$set: {
            firstName: firstName,
            lastName: lastName,
            bio: bio
        }}, {new: true})
        .then(() => {
            const user = req.user
            res.render('pages/profile', { users: user });
        })
        .catch((err) => {
            console.log(err)
        })
    },

    profile_edit_get: (req, res) => {
        const { _id } = req.params;
        Users.findOne({_id: _id})
            .then(users => {
                const user = req.user
                res.render('pages/profile_edit', {
                    users: user
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}