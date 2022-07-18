const mongoose = require("mongoose");

const registerCurriculumSchema = mongoose.Schema({

    cedula: { type: Number, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    lastJob: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    avatar: { type: String, required: true },
    university: { type: String, required: true },
    exp: { type: Number, required: true }
});

module.exports = mongoose.model('registerCurriculum', registerCurriculumSchema);