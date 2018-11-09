var express       = require('express');
var router        = express.Router();
const isPositiveNumber = /^[0-9]+$/;

// Query : len string >= 5 & <= 10
router.get('/shield',function(req,res){
    // String test
    if (req.query.string != undefined){
        var string = req.query.string
        console.log("string/shield : ",string)
        if (typeof string === 'string'){
            if (string.length >= 5){
                if (string.length <= 10){
                    // XXX TODO : Pattern
                    res.status(200).json({message:"OK"})
                } else {
                    res.status(400).json({message:"String length is greater that 10"})
                }
            } else {
                res.status(400).json({message:"String length is less that 5"})
            }
        } else {
            res.status(400).json({message:"Query parameter is not a string"})
        }
    } else {
        res.status(400).json({message:"String Undefined"})
    }
});

router.get('/',function(req,res){
    // String test
    if (req.query.string != undefined){
        var string = req.query.string
        console.log("string/ : ",string)
        if (typeof string === 'string'){
            res.status(200).json({message:"OK"})
        }
    } else {
        res.status(400).json({message:"String Undefined"})
    }
});

module.exports = router;