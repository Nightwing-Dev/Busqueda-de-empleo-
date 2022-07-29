const express = require("express");
const router = express.Router();
const UserRecluiter = require('../models/login-recluiter');
const { body } = require('express-validator')


//Segunda version registro V.2
router.post('/registerRecluiter', async (req, res) => {

    body("email", "Formato De Email Incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
        body("password", "password formato incorrecto", "minimo 6 caracteres")
            .trim()
            .isLength({ min: 6 })
    try {
        const newUsers = UserRecluiter(req.body);
        newUsers.save().then((data) =>
            res.json(data)).catch((error) => res.json
                ({ message: error }));

        const Userrecluiter = await User.findOne({ email });
        if (Userrecluiter) throw { code: 11000 };
    } catch (error) {
        console.log(error.code);
        if (error.code === 11000) {
            return res.status(400).json({ error: "ya existe este usuario, crea otro" });
        }
    }
});

module.exports = router;