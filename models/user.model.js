const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: {
        type: String,
        required: 'this field is required',
    },
    lastname: {
        type: String,
        required: 'this field is required',
    },
    email: {
        type: String,
        required: 'this field is required',
    },
    phone: {
        type: Number,

    },
    password: {
        type: String,
        required: 'this field is required',
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ]
  })
);

module.exports = User;