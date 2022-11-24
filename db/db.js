const User = require('../model/user');

const findUser = async (obj) => {
    await user.findOne(obj).exec();
    // with findOne or update must use .exec()
    // use user.findOne and pass in the object
};

const saveUser = async (user) => {
    // pass in the user like above
    // user.save
};

module.exports = { connect, findUser, saveUser, disconnect };