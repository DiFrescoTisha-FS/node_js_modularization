const mongoose = require("mongoose");

const connect = async () => {
    console.log('Connecting');
    await mongoose.connect('mongodb://localhost:27017/dbTest');    
}

const postUser = async (user) => {
    console.log('Saving')
    return await user.save();
}

const findUser = async (obj) => {
    await User.findOne(obj).exec();
    // with findOne or update must use .exec()
    // use user.findOne and pass in the object
};

const saveUser = async (user) => {
    await user.save();
//     // pass in the user like above
//     // user.save
};

const disconnect = async () => {
    console.log("Disconnecting");    
    await mongoose.connection.close();
};

module.exports = { connect, postUser, findUser, disconnect, saveUser };
