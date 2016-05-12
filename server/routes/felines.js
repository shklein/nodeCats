var express = require('express');
var router = express.Router();
var index = require('./index');

//Data
var cats = ['Kris', 'Luna', 'Rubio'];

//Routes
router.get('/', function (req, res) {
  console.log('hey');
  res.send(cats);
});

router.post('/', function (req, res){
  cats.push(req.body.catName);
  res.send(true);
});


module.exports = router;
