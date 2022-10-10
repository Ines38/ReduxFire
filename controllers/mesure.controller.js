const mesure = require('../models/mesure.model');

//Get all Mesures
const getAllMesure = (req, res) => {
    
    mesure.find((err, docs) => {
        if(!err){
            
            console.log(docs);
            res.send({list: docs});
        }else {
            console.log('Error in retrieval ' + err);
        }
    })
};

//Get Boxes mesure
const getMesureBox = (req, res) => {
    mesure.find({"id_box": req.body.id_box}, (err, doc) => {
        if(err){
            res.send({message: err});
            return;
        }
        if(doc.length == 0){
            res.send({message: "Mesure not found"})
        }else{
            res.send({list: doc})
        }
    })
};

//Get details mesure
const getMesure = (req, res) => {
    mesure.find({"_id": req.body._id}, (err, doc) => {
        if(err){
            res.send({message: err});
            return;
        }
        if(doc.length == 0){
            res.send({message: "Mesure not found"})
        }else{
            res.send({list: doc})
        }
    })
    
};

//Add new mesure
const addMesure = (req, res) => {
    mesure.find({"_id": req.body._id}, (err, doc) => {
        if(err){
            console.log(err);
        }
        if(doc.length == 0){
            insertMesure(req, res);
        }else{
            updateMesure(req, res);
        }
    })
};
function insertMesure(req, res){
    const Mesure = new mesure();
    Mesure.date = req.body.date;
    Mesure.valeur = req.body.valeur;
    Mesure.indicateur = req.body.indicateur;
    Mesure.unite = req.body.unite;
    Mesure.id_box = req.body.box;
    Mesure.save((err, doc) => {
        if(!err) {
           res.redirect('/list')
        }else{
            console.log('Error during insert: '+err)
        }
    })
};
function updateMesure(req, res){
    mesure.findOneAndUpdate(
        {_id: req.body._id},
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

//delete mesure
const deleteMesureById = (req, res, next) => {
    mesure.deleteOne({_id: req.body._id}, (err, obj) => {
        if(err){
            console.log(err);
            return;
        }
        if(obj.deletedCount == 1){
            res.send({message: "Mesure deleted"})
        }else{
            res.send({messge: "No mesure deleted"})
        }
        
    })
    
};

module.exports = {
    getAllMesure,
    getMesure,
    getMesureBox,
    addMesure,
    deleteMesureById
}