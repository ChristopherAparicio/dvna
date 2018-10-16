"use strict";
/* Library */
var express    = require('express');
var expressJWT = require('express-jwt');
var jwt        = require('jsonwebtoken');
var bodyParser = require('body-parser');
//var bcrypt     = require('bcrypt');
var xmlparser = require('express-xml-bodyparser');
//

/* Global Variable */
var app = express();
var port = 8000;
const issuer = "http://localhost:" + port;  
//const bcryptSalt = 10;

/* Routers */
var integer = require('./controllers/integer');
var object = require('./controllers/object'); 

/* Database connection */

/* Middleware */
// JWT Protection
// Login page doesn't require valid jwt
//app.use(expressJWT({secret:jwtKey}).unless({path:['/login','/register','/test']}));

// Remove Header
app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By");
  //res.setHeader('x-timestamp',Date.now());
  next();
});


// Body Parser Decode URL
app.use(bodyParser.urlencoded({extended:true})); // Decode URL
app.use(bodyParser.json()) // Decode JSON


/* Path - Routers */

app.get('/health',function(req,res){
  if (req.query.id != undefined && req.query.name != undefined){
    var id = req.query.id
    var name = req.query.name
    var timeoutValue = Math.floor(Math.random() * Math.floor(3000))
    setTimeout(function(){
      console.log("Health Timeout Done")
      res.sendStatus(200)
    },timeoutValue)
    console.log("Health request incoming with id : ", id, " name : ", name)
  } else {
    console.log("/health, id or name is undefined, id :",id, ", name :",name)
    res.sendStatus(404)
  }
});

app.get('/timeout',function(req,res){
  setTimeout(function(){
    console.log("Timeout Done")
    res.sendStatus(200)
  },5000)
  console.log("Timeout in action")
})

app.use('/integer',integer)
app.use('/object',object)

app.get('/',function(req,res){
  console.log('Somebody request /');
  res.sendStatus(200)
});

// Waiting Connection on the port
app.listen(port);
console.log('Server set up on port : ' + port);