var express       = require('express');
var router        = express.Router();

const isPositiveNumber = /^[0-9]+$/;

// Object : 
// {
//      "id":3         // required    // int32
//      "name":"Hello" // required    // len > 4 && len < 11
//      "alive":true   // not required bool
// }
// No AdditionalProperties

// Simulate a POST Animal
router.put('/json/shield',function(req,res){
    // ID defined 
    if (req.body != undefined){
        if (req.body.id != undefined && req.body.name != nil){
            var id = req.body.id
            var name = req.body.name
            // ID Consistency 
            if (!isNaN(parseInt(id)) && isPositiveNumber.test(id) && parseInt(id)> 0 && parseInt< (Math.pow(2,31))){
                if (typeof name === 'string' && name.length > 4 && name.length < 11) {
                    if (req.body.alive != undefined){
                        if(typeof req.body.alive === "boolean"){
                            if (Object.keys(req.body).length == 3) {
                                res.sendStatus(200)
                            } else {
                                res.status(400).json([{Message:"additional properties present"}])   
                            }
                        } else {
                            res.status(400).json([{Message:"alive is not a boolean"}])   
                        }
                    } else {
                        // Is Undefined but not required
                        // Normally two properties
                        if (Object.keys(req.body).length == 2) {
                            res.sendStatus(200)
                        } else {
                            res.status(400).json([{Message:"additional properties present"}])   
                        }
                    }
                } else{
                    res.status(400).json([{Message:"name doesn't fit constraint"}])   
                }
                res.sendStatus(200)
            } else {
                res.status(400).json([{Message:"ID doesn't fit constraint"}])
            }
        } else {
            res.status(400).json([{Message:"ID or Name is Undefined"}])
        }
    } else {
        res.status(400).json([{Message:"Body undefined"}])
    }
});

// Simulate a POST Animal
router.put('/urlencoded/shield',function(req,res){
    // ID defined 
    if (req.body != undefined){
        if (req.body.id != undefined && req.body.name != nil){
            var id = req.body.id
            var name = req.body.name
            // ID Consistency 
            if (!isNaN(parseInt(id)) && isPositiveNumber.test(id) && parseInt(id)> 0 && parseInt< (Math.pow(2,31))){
                if (typeof name === 'string' && name.length > 4 && name.length < 11) {
                    if (req.body.alive != undefined){
                        if(typeof req.body.alive === "boolean"){
                            if (Object.keys(req.body).length == 3) {
                                res.sendStatus(200)
                            } else {
                                res.status(400).json([{Message:"additional properties present"}])   
                            }
                        } else {
                            res.status(400).json([{Message:"alive is not a boolean"}])   
                        }
                    } else {
                        // Is Undefined but not required
                        // Normally two properties
                        if (Object.keys(req.body).length == 2) {
                            res.sendStatus(200)
                        } else {
                            res.status(400).json([{Message:"additional properties present"}])   
                        }
                    }
                } else{
                    res.status(400).json([{Message:"name doesn't fit constraint"}])   
                }
                res.sendStatus(200)
            } else {
                res.status(400).json([{Message:"ID doesn't fit constraint"}])
            }
        } else {
            res.status(400).json([{Message:"ID or Name is Undefined"}])
        }
    } else {
        res.status(400).json([{Message:"Body undefined"}])
    }
});

// Object : 
// {
//      "id":3         // required (constraint check)
//      "name":"Hello" // not required (constraint not checked)
//      "alive":true   // not required bool
// }
// Allow additional properties...
router.put('/json',function(req,res){
    // Check the body
    if (req.body != undefined){
        var body = req.body
        if (body.id != undefined){
            if (!isNaN(parseInt(id)) && isPositiveNumber.test(id) && parseInt(id)> 0 && parseInt< (Math.pow(2,31))){
                res.sendStatus(200)
            } else {
                res.status(400).json([{Message:"ID doesn't fit constraint"}])
            }
        } else {
            res.status(400).json([{Message:"ID undefined"}])
        }
    } else {
        res.status(400).json([{Message:"Body undefined"}])
    }
});

router.put('/urlencoded',function(req,res){
    // Check the body
    if (req.body != undefined){
        var body = req.body
        if (body.id != undefined){
            if (!isNaN(parseInt(id)) && isPositiveNumber.test(id) && parseInt(id)> 0 && parseInt< (Math.pow(2,31))){
                res.sendStatus(200)
            } else {
                res.status(400).json([{Message:"ID doesn't fit constraint"}])
            }
        } else {
            res.status(400).json([{Message:"ID undefined"}])
        }
    } else {
        res.status(400).json([{Message:"Body undefined"}])
    }
});


module.exports = router;