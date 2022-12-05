const express = require('express');
const User = require('../model/user');
const routes = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

routes.post('/signup', (req, res, next) => {
    // demo part
    // retrieve the firstName, email, password
    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const email = req.body.email;
    const password = req.body.password;
    // encrypt my password
    bcrypt.hash(password, 10, (err, hash) => {
        console.log(hash);
        if(err){
            res.status(500).json({
                error: err.message,
            });
        } else {
            const user = new User({
                _id: mongoose.Types.ObjectId(),
                firstName: firstName,
                lastName: lastName,
                address: address,
                city: city,
                state: state,
                zip: zip,
                email: email,
                password: hash,
            });
            user.save()
                .then((result) => {
                    res.status(201).json({
                        message: "Signup - Successful",
                        firstName: result.firstName,
                        lastName: result.lastName,
                        address: result.address,
                        city: result.city,
                        state: result.state,
                        zip: result.zip,
                        email: result.email,
                });
            })
            .catch((error) => {
                res.status(500).json({
                    message: 'User already exists',
                    error,
                })
            });
        };
    });
});

routes.post('/login', (req, res, next) => {
   User.findOne({ email: req.body.email })
        .then((user) => {
        
    // 1). Find the user use email as the index
    // 2). if no user then return message authentication failed
    // 3). else
    // 4). user is returned with a user hashed password
    // 5). use bcrypt to compare the password
    // 6). check if error then response authenticaion failed
    // 7). result === true
    // 8). send response back with authentication successful
    // 9). and send the user object properties back except password
    // 10). if result is false return message authentication failed
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) return res.status(501).json({
            message: err.message
        });
        if(result){
            res.status(200).json({
                message: 'Authorization Successful',
                result: result,
                firstName: req.body.firstName,
                email: req.body.email,
            });
        } else {
            res.status(401).json({
                message: 'Authorization Failed',
                result: result,
            });
        }
    });
    });
});

routes.get('/profile', (req, res, next) => {
    res.status(200).json({ message: '/profile - GET' });
});

module.exports = routes;