
var express       = require('express');
var router        = express.Router();


// No rules checking
// Query : id,string boolean
router.get('/shield',function(req,res){
    // Integer test
    if (req.query.id != undefined){
        if (req.query.string != undefined){
            if (req.query.boolean != undefined){
                res.status(200).json({message:"OK"})
            } else {
                res.status(400).json({message:"Boolean Undefined"})
            }
        } else {
            res.status(400).json({message:"String Undefined"})
        }
    } else {
        res.status(400).json({message:"ID Undefined"})
    }
});

router.get('/',function(req,res){
     // Integer test
     if (req.query.id != undefined){
        res.status(200).json({message:"OK"})
    } else {
        res.status(400).json({message:"ID Undefined"})
    }
});

module.exports = router;