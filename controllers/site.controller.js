
const site = require("../models/site.model");

//Get all Sites
const getAllSite = (req, res) => {
    
    site.find((err, docs) => {
        if(!err){
            
            console.log(docs);
            res.send({list: docs});
        }else {
            console.log('Error in retrieval ' + err);
        }
    })
};

//Get Sites have same Country
const getSitePays = (req, res) => {
    site.find({"Pays": req.body.Pays}, (err, doc) => {
        if(err){
            res.send({message: err});
            return;
        }
        if(doc.length == 0){
            res.send({message: "Site not find"})
        }else{
            res.send({list: doc})
        }
    })
    // res.json({message: "GET box with state"});
};

//Get box details
const getSite = (req, res) => {
    site.find({"siteName": req.body.siteName}, (err, doc) => {
        if(err){
            res.send({message: err});
            return;
        }
        if(doc.length == 0){
            res.send({message: "Site not find"})
        }else{
            res.send({list: doc})
        }
    })
    
};

//Add new site
const addSite = (req, res) => {
    site.find({"siteName": req.body.siteName}, (err, doc) => {
        if(err){
            console.log(err);
        }
        if(doc.length == 0){
            insertSite(req, res);
        }else{
            updateSite(req, res);
        }
    })
};
function insertSite(req, res){
    const Site = new site();
    Site.siteName = req.body.siteName;
    Site.longitude = req.body.longitude;
    Site.latitude = req.body.latitude;
    Site.pays = req.body.pays;
    //site.box = req.body.box;
    Site.save((err, doc) => {
        if(!err) {
           res.redirect('/list')
        }else{
            console.log('Error during insert: '+err)
        }
    })
};
function updateSite(req, res){
    site.findOneAndUpdate(
        {siteName: req.body.siteName},
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

//delete site
const deleteSiteById = (req, res, next) => {
    site.deleteOne({siteName: req.body.siteName}, (err, obj) => {
        if(err){
            console.log(err);
            return;
        }
        if(obj.deletedCount == 1){
            res.send({message: "Site deleted"})
        }else{
            res.send({messge: "No site deleted"})
        }
        
    })
    
};

module.exports = {
    getAllSite,
    getSitePays,
    getSite,
    addSite,
    deleteSiteById
}