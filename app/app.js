const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const routes = require('../api/routes/routes');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());

const user = {};

app.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
            res.status(500).json({ message: err.message });
        } else {
            user.password = hash;
            res.status(200).json({ password: hash });
        }
    });
});

app.post('/login', (req, res) => {
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) return res.status(501).json({
            message: err.message
        });

        if(result){
            res.status(200).json({
                message: 'Authorization Successful',
                result: result,
            });
        } else {
            res.status(401).json({
                message: 'Authorization Failed',
                result: result,
            })
        }
    })
});

app.use(cors());

// default route to get if service is up, (actuator)
app.get('/', (req, res, next) => {
    res.status(201).json({
        message: 'Service is UP!',
        method: req.method,
    });
});

app.use('/users', routes);

// add middleware to handle errors and bad url paths
app.use((req, res, next) => {
    const error = new Error('NOT FOUND!!!');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
        },
    });
});

// connect to mongodb
mongoose.set('strictQuery', false);
mongoose.connect(process.env.mongoDBURL, (err) => {
    if (err) {
        console.error('Error: ', err.message);
    } else {
        console.log('MongoDB connection successful');
    }
});

module.exports = app;