const bcrypt = require('bcryptjs');
const Users = require("../database/models/User");
const router = require("express").Router();

router.post("/", (req, res) => {
    console.log(req.body)
    User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // user exists
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        // create a new user
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser.save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            });
        });
      }
    })
})


module.exports = router;