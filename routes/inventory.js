var express = require('express');
var router = express.Router();
const Inventory = require('../model/inventory');

router.post('/store', function(req, res){
  Inventory.store(req.body, function(err, result){
    res.redirect('/list')
  });
})

module.exports = router;
