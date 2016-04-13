var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');


//router.get('/', function(req, res, next) {
//  res.render('register', { title: 'Express' });
//});

router.post('/', function (req, res) {
    console.log(User);
    User.create(req.body, function (err, user) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({
                    status: 'Registration successful!'
                });
            });
        })
        //    var user = new User(req.body), function(err, user){
        //        if (err){
        //            return res.status(404).json({
        //                err: err
        //            });
        //        }

});

module.exports = router;