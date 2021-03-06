const mongoose = require("mongoose");

const jobOffersSchema = mongoose.Schema({


    title: {
        type: String,
        required: true
    },
    descriptionCompany: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    workingDate: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required:true
    },
    createdAt:
        { type: Date, default: Date.now, },
});

module.exports = mongoose.model('jobOffers', jobOffersSchema);