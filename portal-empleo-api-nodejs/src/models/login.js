const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

module.export = mongoose.model('login', loginSchema);