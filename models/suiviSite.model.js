const mongoose = require("mongoose")

const suiviSite = mongoose.model(
    "suiviSite",
    new mongoose.Schema(
        {
            user : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            site : {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Site",
            }
        }
    )
);

module.exports = suiviSite;