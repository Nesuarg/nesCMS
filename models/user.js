var mongoose = require('mongoose');

var UserSchema = {
  username: String,
  password: String,
  role: String
};

var User = mongoose.model("User", UserSchema, "user");

module.exports = User;