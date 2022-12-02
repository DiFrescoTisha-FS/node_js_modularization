const express = require('express');
const User = require('../model/user');
const routes = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { response } = require('express');
// const { routes } = require('../../app/app');

routes.post('/signup', async (req, res, next) => {
    // demo part
    // retrieve the firstName, email, password
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.state;
    const email = req.body.email;
    const password = req.body.password;
    // encrypt my password
    bcrypt
        .hash(password, 10, (err, hash) => {
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

            user
                .save()
                .then((result) => {
                    response.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                    console.log(result);
                })
                .catch((error) => {
                    response.status(500).send({
                        message: "User already exists",
                        error,
                    });
                });
                
                

            
            // save it to the database and it returns the user object
            // return it in the response

            // newUser.save()
            // .then(result => {
            //     console.log(result);
            // })
            res.status(201).json({
                message: "Signup - Successful",
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                city: user.city,
                state: user.state,
                zip: user.zip,
                email: user.email,
                password: hash,  // user.firstName once have the object
            });
                
        }
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
    bcrypt.compare(req.body.password, req.body.hash, function(err, result){
        if(err) {
            return res.status(501).json({message: err.message});
        }
        if(result){
            res.status(201).json({
                message: "Authentication Successful",
                result: result,
                firstName: req.body.firstName,
            });
        } else {
            res.status(501).json({ message: "Authenticaion Failed" });
        }
    });
    });
    // console.log(`Hash: ${hash}`);
    // console.log(password)
});


// routes.get('/profile', (req, res, next) => {
//     res.status(200).json({ message: '/profile - GET' });
// });

module.exports = routes;