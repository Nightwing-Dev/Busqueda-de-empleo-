const express = require("express");
const router = express.Router();
const registerCurriSchema = require('../models/registerCurri');


//listar todos los usuarios creados y/o existentes...
router.get('/registerCurri', async (req, res) => {
    try {
        const allregisterCurri = await registerCurriSchema.find();
        res.json(allregisterCurri);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/registerCurri', async (req, res) => {

    const registerCurri = new registerCurriSchema({
        cedula: req.body.cedula,
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.age,
        lastJob: req.body.lastJob,
        phoneNumber: req.body.phoneNumber,
        avatar: req.body.avatar,
        university: req.body.university,
        exp: req.body.exp
    });

    try {
        const saveregisterCurri = await registerCurri.save();
        res.json(saveregisterCurri);
    } catch (error) {
        res.json({ message: error });
    }
   
});



module.exports = router;