var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');


router.post('/register', function (req, res) {
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
});

router.post('/login', function(req, res){
    console.log(req.body);
    User.findOne(req.body, function(err, user){
        if (err) {
            return res.status(500).json({
                err:err
            });
        }
        passport.authenticate('local')(req, res, function(){
            return res.status(200).json({
                status: 'logged in successful!'
            });
        });
    })
});

router.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

router.post('/logout', function(req, res){
  req.logOut();
  res.send(200);
});


module.exports = router;