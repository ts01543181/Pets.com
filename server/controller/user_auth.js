const bcrypt = require('bcryptjs');
const User = require("../database/models/User");
const router = require("express").Router();
const key = require("../../config/key");
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport');

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    console.log(req.body)
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.name = "User already exists";
        return res.status(400).json(errors);
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
                .then(user => {
                  const payload = { id: user.id, name: user.name };

                  jwt.sign(payload, key.secret, { expiresIn: 3600 }, (err, token) => {
                    res.json({
                      success: true,
                      token: "Bearer " + token
                    });
                  });
                })
                .catch(err => console.log(err));
            });
        });
      }
    })
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  console.log(req.body)
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email})
    .then(user => {
      if (!user) {
        errors.name = "This user does not exist";
        return res.status(400).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {id: user.id, name: user.name, email};
      
            jwt.sign(
              payload,
              key.secret,
              {expiresIn: 3600},
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            errors.password = "Incorrect password";
            return res.status(400).json(errors);
          }
        })
    })
});

// grab current user info
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});
module.exports = router;