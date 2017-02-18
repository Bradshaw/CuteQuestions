var express = require('express');
var router = express.Router();
var passport = require('passport')

router.get('/',
  function(req, res){
    res.render('login');
  }
);

router.get('/twitter',
  passport.authenticate('twitter')
);

router.get('/twitter/return', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);
module.exports = router;