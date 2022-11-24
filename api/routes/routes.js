const express = require('express');
// const { rawListeners } = require('../model/user');
const User = require('../model/user');
const bcrypt = require("bcrypt");
const routes = express.Router();

routes.post('/signup', (req, res) => {
    let { email:_Id } = req.body.email;
// findUser by email address {email:_Id}.......req.body.blah
User.findOne({ })
    if (email === req.body.email) {
    console.log("email already taken")
    res.status(409).json({
        message: "Email already taken",
    });
    } else {
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const NewUser = User({
            email: req.body.email,
            password: hash
        });
        User.save()
        .then(result => {
            res.status(201).json({
                message: "User Created",
                result: result
            });
        });
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
    }
});
// if user exists riturn 409 message user exists
// else ecrypt password
// create new user object from our model with our hash as our password
// save user   .....Like user.save and pass in user(from db.js)


routes.post('/login', (req, res) => {
    // findUser
    // if user not found then return 401 message Authorization failed
    // else
    // compare passwords
    // test for the error
    // test result (true, or false)
    // message authorization successful
    // return name:
});

routes.get('/profile', (req, res, next) => {
    res.status(200).json({ message: '/profile - GET' });
});

module.exports = routes;