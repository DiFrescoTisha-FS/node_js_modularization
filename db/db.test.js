// db functions (connect, findUser, saveUser, disconnect)
// User model
// mongoose
const mongoose = require("mongoose");
const User = require('../model/user');

// const { DESCRIBE } = require("sequelize/types/query-types");

beforeEach(async () => {
    // call the connect method
});

describe("", () => {
    test("save user", () => {
        // create user (include all properties)

        // saveUser then pass in the user you just created
        // expect firstName
        // expect lastName
    });

    test('find user', () => {
    //  1). get user from calling the findUser({}) .  //// pass in some sort of obj
    //  2). already created user (...above) so use the email from that
    //  3). gives user back
    //  4). // expect firstName
    //  5). // expect lastName
    });
});

afterEach(async () => {
    // call the disconnect method
})
// const { default: mongoose } = require('mongoose');
// const { DESCRIBE } = require('sequelize/types/query-types');
// const user = require('../api/model/user');
// const { postUser } = require('./db');

// DESCRIBE('DB Functions', () {
//     test("As a user I want to post a user to the database", async () => {
//         const newUser = new user({
//             _id: mongoose.Types.ObjectId(),
//             firstName: 'Eric',
//             email: 'eclarke@fullsail.edu',
//         })
//     })
// })