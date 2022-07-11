const express = require("express");
const registerSchema = require('../models/register')
const router = express.Router();

//creacion de usuario por medio de un registro...
router.post('/register', (req, res) => {
    const register = registerSchema(req.body);
    register.save().then((data) =>
        res.json(data)).catch((error) => res.json
            ({ message: error }));
});

module.exports = router;