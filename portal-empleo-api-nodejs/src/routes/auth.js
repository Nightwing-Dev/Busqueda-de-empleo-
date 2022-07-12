const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator')

router.post('/register',
       body("email", "Formato De Email Incorrecto")
              .trim()
              .isEmail()
              .normalizeEmail(),
       body("password", "password formato incorrecto")
              .trim()
              .isLength({ min: 6 }),

       (req, res) => {
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                     return res.status(400).json({ errors: errors.array() });
              }
              res.json({ ok: "funcionando" });
       });

router.post('/login',
       body("email", "Formato De Email Incorrecto")
              .trim()
              .isEmail()
              .normalizeEmail(),
       body("password", "minimo caracteres 6 para la contraseña")
              .trim()
              .isLength({ min: 6 }),
       (req, res) => {
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                     return res.status(400).json({ errors: errors.array() });
              }
              res.json({ ok: "tambien funcionando" });
       })

module.exports = router;