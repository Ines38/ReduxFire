const mongoose = require("mongoose")
const { INTEGER, DATE, DOUBLE } = require("sequelize")

const mesure = mongoose.model(
    "mesure",
    new mongoose.Schema(
        {
            id : {
                type : Number,
                AutoIncrement : true,
                PrimaryKey : true
            },
            date : {
                type : Date
            },
            valeur : {
                type : String
            },
            indicateur : {
                type : String
            },
            unite : {
                type : String
            },
            id_box: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "box",
                
            }
        }
    )
);

module.exports = mesure;