const {connect, disconnect, findUser, postUser} = require("./db");
const mongoose = require("mongoose");
const User = require('../api/model/user');
const user = require("../api/model/user");

jest.mock('./db');

beforeEach(async () => {
    connect();
});

describe("Save User to Database", () => {
    test("I want to post a user to the database as a user", async () => {
        const newUser = new User({
            _id: mongoose.Types.ObjectId(),
            firstName: 'Tisha',
            lastName: 'Di Fresco',
            address: '129 Maybin Rd',
            city: 'Zirconia',
            state: 'NC',
            zip: '28790',
            email: 'tbdifresco@student.fullsail.edu',
            password: "tootsie71"
        });

        await connect();
        const user = await postUser(newUser);
        expect(user.firstName).toEqual("Tisha");
        expect(user.lastName).toEqual("Di Fresco");
        expect(user.address).toEqual("129 Maybin Rd");
        expect(user.city).toEqual("Zirconia");
        expect(user.state).toEqual("NC");
        expect(user.zip).toEqual("28790");        
        expect(user.email).toEqual("tbdifresco@student.fullsail.edu")        
        expect(user.password).toEqual("tootsie71");
        await disconnect();

    })
})

// test("save user", () => {
        // create user (include all properties)

        // saveUser then pass in the user you just created
        // expect firstName
        // expect lastName
    // });


    // test('find user', () => {
    //  1). get user from calling the findUser({}) .  //// pass in some sort of obj
    //  2). already created user (...above) so use the email from that
    //  3). gives user back
    //  4). // expect firstName
    //  5). // expect lastName
//     });


afterEach(async () => {
    disconnect()
})

