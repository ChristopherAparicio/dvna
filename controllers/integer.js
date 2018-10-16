var express       = require('express');
var router        = express.Router();
const isPositiveNumber = /^[0-9]+$/;

// Query : id int 32 (id > 0 && id < 2^31) exclusive min : true, multiple of 2
router.get('/shield',function(req,res){
    // Id TEST
    if (req.query.id != undefined){
        var id = req.query.id
        if (!isNaN(parseInt(id))){
            if (isPositiveNumber.test(id)){
                if (parseInt(id)> 0){
                    if (parseInt< (Math.pow(2,31))){
                        if (id%2 == 0){
                            res.sendStatus(200)
                        } else {
                            res.status(400).json([{Message:"Not a multiple of 2"}])
                        }
                    } else{
                        res.status(400).json([{Message:"Overflow upper limit int32"}])
                    }
                } else {
                    res.status(400).json([{Message:"ID isn't a strictly positive number"}])
                }
            } else {
                res.status(400).json([{Message:"ID isn't a positive number"}])
            }
        } else {
            res.status(400).json([{Message:"ID isn't a number"}])
        }
    } else {
        res.status(400).json([{Message:"ID Undefined"}])
    }
});

router.get('/',function(req,res){
     // Id TEST
     if (req.query.id != undefined){
         if (!isNaN(req.query.id)){
            res.sendStatus(200)
         } else {
            res.status(400).json([{Message:"ID is not a number"}])
         }

    } else {
        res.status(400).json([{Message:"ID Undefined"}])
    }
});

module.exports = router;