var express = require('express');
var router = express.Router();
const jsonListOfPropeties =
    [

        {
            cardTitle : "ServerApi3",
            cardText : "Rent: Rs3000, 3bhk",
            imgLocation : "sample1.svg"
        }
        ,
        {
            cardTitle : "Delhi",
            cardText : "Rent: Rs2000, 2bhk",
            imgLocation : "logo192.png"
        },
        {
            cardTitle : "Mumbai",
            cardText : "Rent: Rs3000, 3bhk",
            imgLocation : "sample1.svg"
        }
        ,
        {
            cardTitle : "Delhi",
            cardText : "Rent: Rs2000, 2bhk",
            imgLocation : "logo192.png"
        },
        {
            cardTitle : "Mumbai",
            cardText : "Rent: Rs3000, 3bhk",
            imgLocation : "sample1.svg"
        }
        ,
        {
            cardTitle : "Delhi",
            cardText : "Rent: Rs2000, 2bhk",
            imgLocation : "logo192.png"
        },
        {
            cardTitle : "Mumbai",
            cardText : "Rent: Rs3000, 3bhk",
            imgLocation : "sample1.svg"
        }
        ,
        {
            cardTitle : "Delhi",
            cardText : "Rent: Rs2000, 2bhk",
            imgLocation : "logo192.png"
        },
        {
            cardTitle : "Mumbai",
            cardText : "Rent: Rs3000, 3bhk",
            imgLocation : "sample1.svg"
        }
        ,
        {
            cardTitle : "Delhi",
            cardText : "Rent: Rs2000, 2bhk",
            imgLocation : "logo192.png"
        }
    ]





/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("<h2>info:Api for the propertylisting <br> " +
        "list:[get] list all the property <br> " +
        "/list/:id:[get] details for the property <br> " +
        "/list/add/:id:[post] details for the property <br>" +
        " /list/del/:id:[post] details for the property</h2>"


    );
});

router.get('/list',(req,res,next)=>{
    console.log("Hit Here")
    res.send(JSON.stringify({'output':jsonListOfPropeties}))

})


module.exports = router;
