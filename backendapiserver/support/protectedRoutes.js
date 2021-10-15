var express = require('express');
var router = express.Router();
// Created Generic Middleware for protected routes

function getLevelProtection( loginRequired,levelRequried ){


    
    return router.use('*',(req,res,next)=>{

        if (req.isloggedIn && req.level>=levelRequried){
            next()
        }
        else {
            res.send(" Login or elevated priveldges needed")
        }







    }) 



}





module.exports=getLevelProtection