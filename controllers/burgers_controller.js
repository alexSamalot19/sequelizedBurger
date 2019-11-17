const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions.
//========================================================
const db = require('../models');

// Create all routes and set up logic within those routes where required.
//========================================================
router.get('/', function(req, res) {
  db.burger.findAll({}).then(function(burgers) {
    res.render("index", { burgers: burgers });
    // console.log(burgers)
  });
  });
  
  router.post('/', function(req, res) {
    db.burger.create({
      burger_name: req.body.burger_name
    })
      .then(function() {
        return res.redirect("/");
    });
    
  });
  
  router.put('/', function(req, res) {
  // UPDATE devoured to true
  db.burger.update(
    {
     devoured: true
    },
    {
     where: {
       id: req.body.id
     }
    }).then(function() {
      return res.redirect("/");
    });
  });
  
  // router.delete("/api/burgers/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //   burger.delete(condition, function(result) {
  //     if (result.affectedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });
  
  // Export routes for server.js to use.
  //========================================================
  module.exports = router;
  