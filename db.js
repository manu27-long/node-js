const express = require('express');
const router = express.Router();
const db = require ("./db");
const db2 = require ("./db");

/*Get home page.*/
  router.get('/', function (req, res, next){
    res.render('index', {title: 'Espress'});
  });
  
  module.exports = router;