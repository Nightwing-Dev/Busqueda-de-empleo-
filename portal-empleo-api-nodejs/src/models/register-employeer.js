const mongoose = require("mongoose");

const registerCurriculumSchema = mongoose.Schema({

    cedula: { type: Number, required: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true},
    password: { type: String, require: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    id: { type: Number, required: true },
    lastJob: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    avatar: { type: String, required: true }
});

module.exports = mongoose.model('register', registerCurriculumSchema);