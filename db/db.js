// const User = require('../model/user');

// // all of these should only be one line of code

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

module.exports = { findUser, saveUser };
