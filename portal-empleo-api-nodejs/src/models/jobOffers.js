const mongoose = require("mongoose");

const jobOffersSchema = mongoose.Schema({
    

    title: {
        type: String,
        required: true
    },
    company: {
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
    companyImage: {
        type: String,
        required: true
    },
    createdAt : 
    { type : Date, default: Date.now, },
});

module.exports = mongoose.model('jobOffers', jobOffersSchema);