// Profile model schema to be created

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
    }
}