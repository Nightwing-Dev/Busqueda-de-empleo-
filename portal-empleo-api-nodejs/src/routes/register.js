const express = require("express");
const registerSchema = require('../models/register')
const router = express.Router();

//creacion de usuario por medio de un registro...
router.post('/register', (req, res) => {
    res.send("usuario creado exitosamente");
});

module.exports = router;