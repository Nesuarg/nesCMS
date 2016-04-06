var express = require('express');
var router = express.Router();
var passport = require('passport')



var auth = function(req, res, next){ 
    if (!req.isAuthenticated()) res.send(401); 
    else next(); 
};

/*router.get('/users', auth, function(req, res){
  res.send([{name: "user1"}, {name: "user2"}]);
});

router.get('/content', auth, function(req, res){
  res.send([{name: "user1"}, {name: "user2"}]);
});*/
//==================================================================

//==================================================================
// route to test if the user is logged in or not
router.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

// route to log in
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send(req.user);
  console.log('logged in yo');
});

// route to log out
router.post('/logout', function(req, res){
  req.logOut();
  res.send(200);
});

module.exports = router;