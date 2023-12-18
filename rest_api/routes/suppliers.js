var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Suppliers = require('../models').suppliers;

var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Users = require('../models').users;

router.get('/findAll', function(req, res, next) {
    res.send("GET All")
});
router.get('/findById/:id', function(req, res, next) {
    res.send("GET By Id")
});
router.post('/save', function(req, res, next) { 
    res.send("POST")
});
router.put('/update/:id', function(req, res, next) { 
    res.send("PUT")
});  
router.delete('/delete/:id', function(req, res, next) { 
    res.send("DELETE")
});

module.exports = router;


router.post('/save', function(req, res, next) { 
    let {SupplierName, ContactName, Address, City, PostalCode, Country, Phone} = req.body;
          
      Suppliers.create({
          SupplierName: SupplierName, 
          ContactName: ContactName, 
          Address: Address, 
          City: City, 
          PostalCode: PostalCode, 
          Country: Country, 
          Phone: Phone
      })
      .then(data => {  
        res.json(data);  
    })  
    .catch(error => res.status(400).send(error)) 
  });

  router.get('/findById/:id', function(req, res, next) {

    let id = parseInt(req.params.id);
  
    Suppliers.findOne({  
        where: { 
          [Op.and]: [
            {SupplierID: id}
          ]
        }
    })  
    .then(data => {  
        res.json(data);  
    })  
    .catch(error => res.status(400).send(error)) 
  });

/* GET users listing. */
router.get('/findAll/json', function(req, res, next) {
  Users.findAll({  
  })  
  .then(users => {  
      res.json(users);  
  })  
  .catch(error => res.status(400).send(error)) 
});
 

/* GET user by id. */
router.get('/findById/:id/json', function(req, res, next) {  

  let id = parseInt(req.params.id);

  Users.findOne({  
      where: { 
        [Op.and]: [
          {id: id}
        ]
      }
  })  
  .then(users => {  
      res.json(users);  
  })  
  .catch(error => res.status(400).send(error)) 
});

