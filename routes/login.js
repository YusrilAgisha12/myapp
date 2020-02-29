var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/index', { title: 'Login' });
});


var Users = require('../model/user');
router.post('/',async function(req,res){
  const {body} = req;
  Users.authLogin(body, function(err,result){
    res.redirect('/darsbord')
  })
})

module.exports = router;
