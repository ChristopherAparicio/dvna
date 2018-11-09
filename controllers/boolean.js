var express       = require('express');
var router        = express.Router();

// Query : no rules
router.get('/shield',function(req,res){
    // Boolean test
    if (req.query.bool != undefined){
        var boolean = req.query.bool
        console.log("boolean/shield : ",boolean)
        if (typeof boolean === "boolean"){
            res.status(200).json({message:"OK"})
        } else {
            res.status(400).json({message:"Value is not a boolean"})
        }
    } else {
        res.status(400).json({message:"ID Undefined"})
    }
});

// Boolean test
router.get('/',function(req,res){
    if (req.query.bool != undefined){
        var boolean = req.query.bool
        console.log("boolean/ : ",boolean)
        if (typeof boolean === "boolean"){
            res.status(200).json({message:"OK"})
        } else {
            res.status(400).json({message:"Value is not a boolean"})
        }
    } else {
        res.status(400).json({message:"ID Undefined"})
    }
});

module.exports = router;