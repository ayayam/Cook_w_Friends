const Users = require("../models/user-model");
const passport = require("passport");

module.exports = {
  home: (req, res) => {
    res.render('pages/home', {});
  },

  login_get: (req, res) => {
    res.render('pages/login', {});
  },

  login_post: (req, res) => {
    const {username, password} = req.body;
    const user = new Users({
      username: username,
      password: password,
    });
    req.login(user, (err) => {
      if (err) {
        console.log(err);
        res.redirect('/login');
      } else {
        passport.authenticate('local')(req, res, () => {
          res.redirect('/admin');
        });
        


        // passport.authenticate("local")(req, res, () => {
        //   Users.find({ username: username }).then((user) => {
        //     res.redirect("/user/_:id/profile", { users: user });
        //   });
        // });
      }
    });
  },

  contact_us_get: (req, res) => {
    res.render('pages/contact_us', {});
  },

  contact_us_post: (req, res) => {},

  register_get: (req, res) => {
    res.render('pages/register', {});
  },


  register_post: (req, res) => {
    Users.register({firstName: req.body.firstName, lastName: req.body.lastName, username: req.body.username, email: req.body.email, bio: req.body.bio}, req.body.password, (err, user) => {
      if (err) {
        console.log(err);
        res.redirect('/register');
      } else {
        passport.authenticate('local')(req, res, () => {
          res.redirect('/admin')
        });
      }
    });
  },

  // THIS ONE WORKS WITH JUST USERNAME AND PASSWORD
  // register_post: (req, res) => {
  //   Users.register({username: req.body.username}, req.body.password, (err, user) => {
  //       if (err) {
  //           console.log(err);
  //           res.redirect('/register');
  //       } else {
  //           passport.authenticate('local')(req, res, () => {
  //               res.redirect('/user/_:id/profile')
  //           });
  //       }
  //   });    
  // },


  search_get: (req, res) => {
    res.render("pages/search");
  },

  search_post: (req, res) => {},

  google_get: passport.authenticate('google', {
    scope: ['openid', 'profile', 'email'],
  }),

  google_redirect_get: [
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/admin');
      console.log('You are logged in');
    },
  ],

  logout: (req, res) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  },

  shopping_list: (req, res) => {
    res.render('pages/shopping_list', {})
  }
};
