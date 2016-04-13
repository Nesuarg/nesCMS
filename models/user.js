var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')
//var passportLocalMongoose = require('passport-local-mongoose');

var user = mongoose.Schema({
    username: String
    , password: String
    , role: String
});

//user.methods.generateHash = function(password){
//    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//};

/*user.remove({}, function (err, data) {
    User.create({
        username: "derper"
        , password: "1234"
        , email: "derp@memes.com"
    , }, {
        username: "Kappa"
        , password: "4321"
        , name: "Kappa de Kappa"
    , }, {
        username: "BrokeBack"
        , password: "1111"
        , name: "Broke back"
    , })
})*/

module.exports = mongoose.model('User', user, "user");