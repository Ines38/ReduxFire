
const box = require("../models/box.model");
const db = require("../models/index");

roles = db.ROLES;

//Get all Boxes
const getAllBox = (req, res, next) => {
    
    box.find((err, docs) => {
        if(!err){
            //res.json({message: "GET all box"});
            console.log(docs);
            res.send({list: docs});
        }else {
            console.log('Error in retrieval ' + err);
        }
    })
};

//Get Boxes have same state
const getBoxEtat = (req, res, next) => {
    res.json({message: "GET box with state"});
};

//Get box details
const getBox = (req, res, next) => {
    box.find({"imei": req.body.imei}, (err, doc) => {
        if(err){
            res.send({message: err});
            return;
        }
        if(doc.length == 0){
            res.send({message: "Box not find"})
        }else{
            res.send({list: doc})
        }
    })
    //res.send({message: "details box"});
};

//Add new box
const addBox = (req, res) => {
    box.find({"imei": req.body.imei}, (err, doc) => {
        if(err){
            console.log(err);
        }
        if(doc.length == 0){
            insertBox(req, res);
        }else{
            updateBox(req, res);
        }
    })
};
function insertBox(req, res){
    const Box = new box();
    Box.imei = req.body.imei;
    Box.dateInstallation = req.body.dateInstallation;
    Box.lastConnection = req.body.lastConnection;
    //box.site = req.body.site;
    Box.save((err, doc) => {
        if(!err) {
           res.redirect('/list')
        }else{
            console.log('Error during insert: '+err)
        }
    })
};
function updateBox(req, res){
    box.findOneAndUpdate(
        {imei: req.body.imei},
        req.body,
        {new: true},
        (err, doc) => {
            if(!err){
                res.redirect("/list");
            } else{
                console.log('Error during update', +err);
            }
        }
    );
}

//delete box
const deleteBoxById = (req, res, next) => {
    box.deleteOne({imei: req.body.imei}, (err, obj) => {
        if(err){
            console.log(err);
            return;
        }
        if(obj.deletedCount == 1){
            res.send({message: "Box deleted"})
        }else{
            res.send({messge: "No box deleted"})
        }
        
    })
    //res.json({message: "delete box"})
};

module.exports = {
    getAllBox,
    getBoxEtat,
    getBox,
    addBox,
    deleteBoxById
}