const mongoose = require("mongoose");

const box = mongoose.model(
    "Box",
    new mongoose.Schema(
        {
            id : {
                type : Number,
                autoIncrement: true,
                primaryKey : true
            },
            imei : {
                type: String,
            },
            dateInstallation : {
                type : Date,

            },
            lastConnection : {
                type : Date,
            },
            site : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Site"
            },
            mesure : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "mesure"
            }
        }
    )
);

module.exports = box;