const connect = async () => {
    console.log("Mock Connecting")    
};

const postUser = async(user) => {
    console.log('Mock Saving')
    return Promise.resolve({
        firstName: "Tisha",
        lastName: 'Di Fresco',
        address: "129 Maybin Rd",
        city: "Zirconia",
        state: "NC",
        zip: "28790",
        email: "tbdifresco@student.fullsail.edu",
        password: "tootsie71"
    });
};


    // with findOne or update must use .exec()
    // use user.findOne and pass in the object
// };

// const saveUser = async (user) => {
//     await user.save(user).exec();
//     // pass in the user like above
//     // user.save
// };

const disconnect = async () => {
    console.log('Mock Disconnecting')
}

module.exports = { connect, disconnect, postUser };