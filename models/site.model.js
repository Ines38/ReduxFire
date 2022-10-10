const mongoose = require("mongoose")
const box = require("./box.model")

const site = mongoose.model(
    "Site",
    new mongoose.Schema(
        {
            id : {
                type : Number,
                autoIncrement : true,
                primaryKey : true
            },
            siteName : {
                type : String
            },
            longitude : {
                type : String
            },
            latitude : {
                type : String
            },
            pays : {
                type : String
            },
            boitier : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "box"
            }
        }
    )
);

module.exports = site;