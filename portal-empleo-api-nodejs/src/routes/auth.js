const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator')
const User = require('../models/login');
const jwt = require('jsonwebtoken');


router.post('/login',
       body("email", "Formato De Email Incorrecto")
              .trim()
              .isEmail()
              .normalizeEmail(),
       body("password", "minimo caracteres 6 para la contraseña")
              .trim()
              .isLength({ min: 6 }),
       async (req, res) => {

              try {
                     const { email, password } = req.body

                     let user = await User.findOne({ email });
                     if (!user)
                            return res.status(400).json({ error: "no existe este usuario" });

                     const respuestaPassword = await user.comparePassword(password)
                     if (!respuestaPassword)
                            return res.status(403).json({ error: "contraseña incorrecta" });

                     //generar el token jwt
                     const errors = validationResult(req);
                     if (!errors.isEmpty()) {
                            return res.status(403).json({ errors: errors.array() });
                     }

                     const token = jwt.sign({ uid: user._id }, 'SflKxwRJSMeKKF2QT4fwp');
                     return res.json({ token });

              } catch (error) {
                     console.log(error);
                     return res.status(500).json({ error: "error de servidor" });
              }
       });

module.exports = router;