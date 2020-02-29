var express = require('express');
var router = express.Router();
const Inventory = require('../model/inventory');

router.get('/', function(req, res){
  // res.render('list/index', { title: 'list' });
  Inventory.list(req.body, function(err, result){
    // res.send(result)
    const list = result;
    res.render('list/index', { list: list });
  })
})
router.get('/:id', function(req, res){
  Inventory.deleteList(req.params, function(err, result){
    res.redirect('/list')
  })
})

module.exports = router;
