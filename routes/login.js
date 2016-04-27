var express = require('express');
var User = require('../models/user');
var passport = require('passport');

var router = express.Router();

router.post('/', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(User, function (err) {
            if (err) {
                return res.status(500).json({
                    err: 'could not log ya in'
                });
            }
            res.status(200).json({
                status: 'login successful!'
            });
        });
    })(req, res, next);
});
//router.get('/logout', function (req, res) {
//    req.logout();
//    res.status(200).json({
//        status: 'Bye!'
//    });
//});

module.exports = router;