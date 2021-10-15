var express = require('express');
var router = express.Router();
var loginHandle= require('../support/dbdriver')
// /api/v1/auth
// /api/v1/auth/login ---ALL
/* GET users listing. */
var jwt = require('jsonwebtoken')

router.use('/', function(req, res, next) {
    console.log("MiddleWare Executed");
   next()
 
});




router.get('/', function(req, res, next) {
    //console.log(JSON.stringify(req.headers));
    res.send('auth Api is woroking');
 
});



router.post('/login', function(req, res, next) {
    //console.log(JSON.stringify(req.headers));
    output=loginHandle(req.body.username,req.body.password)
    if (output)
   { res.cookie('__kj',output.token, { maxAge: 600000 ,httpOnly:true});
     res.cookie('__ilin',true, { maxAge: 600000 });
    }
    else {
        console.log("Login failed ")
        res.clearCookie("__kj")
    }
    res.status(200).json({result:output.message});
 
});

router.get('/logout', function(req, res, next) {
    console.log("Logging out")
    res.clearCookie("__ilin")
    res.clearCookie("__kj")
    
    res.send("Logged out successfully")
});


router.get('/verifyToken',(req,res,next)=>{
    console.log(req.params)
    decoded = jwt.verify(req.query.token, process.env.JWT_SIGN_SECRET)
    res.json(decoded)

})



module.exports = router;
