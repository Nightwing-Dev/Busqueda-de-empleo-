const express = require("express");
const loginSchema = require("../models/login")
const router = express.Router();

router.post('/login', (req, res) => {
    const login = loginSchema(req.body);
    login.save().then((data) =>
        res.json(data)).catch((error) => res.json
            ({ message: error }));
});

module.exports = router;