var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const request = require('request');
const { json } = require('express');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Go to /availableitems to check the available items' });
});

router.get('/availableitems', function(req, res, next) {
                res.send("These are the available products :<br/>Product no 1: Clothing <br/>Product no 2: Footwear <br/>Product no 3: sweatshirts & Hoodies<br/> Product no 4: Electronics");
               
});

module.exports = router;
