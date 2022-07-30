const express = require("express");
const jobOffersSchema = require("../models/jobOffers")
const router = express.Router();



//listar todos los trabajos creados y/o existentes...
router.get('/jobOffers', async (req, res) => {
    try {
        const alljobOffers = await jobOffersSchema.find();
        res.json(alljobOffers);
    } catch (error) {
        res.json({ message: error })
    }
});

//version 1.1 de publicar trabajos

router.post('/jobOffers', async (req, res) => {

    const jobOffers = new jobOffersSchema({
        title: req.body.title,
        descriptionCompany: req.body.descriptionCompany,
        salary: req.body.salary,
        location: req.body.location,
        activity: req.body.activity,
        workingDate: req.body.workingDate,
        experience: req.body.experience,
        createAt: req.body.createAt
    });

    try {
        const saveJobOffers = await jobOffers.save();
        res.json(saveJobOffers);
    } catch (error) {
        res.json({ message: error });
    }

});

router.get('/jobOffers/:_id', async (req, res) => {
    try {
        const jobOffers = await jobOffersSchema.findById(req.params._id);
        res.json(jobOffers);
    } catch (error) {
        res.json({ message: error });
    }
});


router.delete('/jobOffers/:_id', async (req, res) => {
    try {
        const removeJobs = await jobOffersSchema.deleteOne({ _id: req.params._id });
        res.json(removeJobs);
    } catch (error) {
        res.json({ message: error });
    }
})

router.patch('/jobOffers/:_id', async (req, res) => {
    try {
        const updateJobs = await jobOffersSchema.updateOne({ _id: req.params._id }, {
            $set: {
                title: req.body.title,
                descriptionCompany: req.body.descriptionCompany,
                salary: req.body.salary,
                location: req.body.location,
                activity: req.body.activity,
                workingDate: req.body.workingDate,
                experience: req.body.experience
            }
        });
        res.json(updateJobs);
    } catch (error) {
        res.json({ message: error });
    }
})



module.exports = router;