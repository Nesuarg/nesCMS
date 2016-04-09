var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema({
    email: String,
    password: String,
    role: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema , "user");