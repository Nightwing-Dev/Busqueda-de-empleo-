const express = require("express");
const jobOffersSchema = require("../models/jobOffers")
const router = express.Router();

router.post('/jobOffers', (req, res) => {
    const jobOffers = jobOffersSchema(req.body);
    jobOffers.save().then((data) =>
        res.json(data)).catch((error) => res.json
            ({ message: error }));
});

router.get('/')

router.put('/')

router.delete('/')

module.exports = router;