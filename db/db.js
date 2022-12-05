const mongoose = require("mongoose");

const connect = async () => {
    await mongoose.connect();
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
    await mongoose.connection.close()
}

module.exports = { connect, findUser, saveUser, disconnect };
