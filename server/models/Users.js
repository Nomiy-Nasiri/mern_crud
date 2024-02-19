
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    age: Number
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;




// const mongoose = require("mongoose")

// const UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number,
//     phone: Number
// })

// const UserModel = mongoose.model("url", UserSchema)
// module.export = UserModel