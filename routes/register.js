var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/register', function(req, res){
    var user = req.body;
    
    var newUser = new user({
        email: user.email,
        password: user.password
    })
    
    newUser.save(function(err){
        res.status(200).json(newUser);
    })
})


module.exports = router;