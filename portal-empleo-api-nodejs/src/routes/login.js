const express = require("express");

const router = express.Router();

router.post('/login', (req, res) => {
    res.send('logueado correctamente');
});

module.exports = router;