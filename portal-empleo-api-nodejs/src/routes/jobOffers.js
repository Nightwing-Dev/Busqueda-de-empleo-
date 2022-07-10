const express = require("express");

const router = express.Router();

router.post('/jobOffers', (req, res) => {
    res.send('Oferta postulada Correctamente');
});

module.exports = router;