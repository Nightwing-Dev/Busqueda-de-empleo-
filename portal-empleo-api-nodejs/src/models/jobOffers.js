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
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

module.export = mongoose.model('jobOffers', jobOffersSchema);