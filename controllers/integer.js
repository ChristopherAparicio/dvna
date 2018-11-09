var express       = require('express');
var router        = express.Router();
const isPositiveNumber = /^[0-9]+$/;

// Query : id int 32 (id > 0 && id < 2^31) exclusive min : true, multiple of 2
router.get('/shield',function(req,res){
    // Integer test
    if (req.query.id != undefined){
        var id = req.query.id
        console.log("integer/shield : ",id)
        if (!isNaN(parseInt(id))){
            if (isPositiveNumber.test(id)){
                if (parseInt(id)> 0){
                    if (parseInt< (Math.pow(2,31))){
                        if (id%2 == 0){
                            res.status(200).json({message:"OK"})
                        } else {
                            res.status(400).json({message:"Not a multiple of 2"})
                        }
                    } else{
                        res.status(400).json({message:"Overflow upper limit int32"})
                    }
                } else {
                    res.status(400).json({message:"ID isn't a strictly positive number"})
                }
            } else {
                res.status(400).json({message:"ID isn't a positive number"})
            }
        } else {
            res.status(400).json({message:"ID isn't a number"})
        }
    } else {
        res.status(400).json({message:"ID Undefined"})
    }
});

router.get('/',function(req,res){
     // Integer test
     if (req.query.id != undefined){
         var id = req.query.id
         console.log("integer/ : ",id)
         if (!isNaN(id)){
            res.status(200).json({message:"OK"})
         } else {
            res.status(400).json({message:"ID is not a number"})
         }

    } else {
        res.status(400).json({message:"ID Undefined"})
    }
});

module.exports = router;