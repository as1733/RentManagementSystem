var express = require('express');
var router = express.Router();
var loginHandle= require('../support/dbdriver')
// /api/v1/auth
// /api/v1/auth/login ---ALL
/* GET users listing. */


router.use('/', function(req, res, next) {
    console.log("MiddleWare Executed");
   next()
 
});




router.get('/', function(req, res, next) {
    //console.log(JSON.stringify(req.headers));
    res.send('auth Api is woroking');
 
});



router.all('/login', function(req, res, next) {
    //console.log(JSON.stringify(req.headers));
    output=loginHandle(req.body.username,req.body.password)
  
    res.send(JSON.stringify({result:output,message:'login true or false' , userparams :JSON.stringify(req.body)}));
 
});



module.exports = router;
