const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator')
const User = require('../models/login');
const jwt = require('jsonwebtoken');


router.post('/register',

       body("email", "Formato De Email Incorrecto")
              .trim()
              .isEmail()
              .normalizeEmail(),
       body("password", "password formato incorrecto")
              .trim()
              .isLength({ min: 6 }),

       async (req, res) => {
              const { email, password, } = req.body
              try {
                     //[para buscar por el email y no se repita]
                     const user = await User.findOne({ email });
                     if (user) throw { code: 11000 };

                     user = new User({ email, password });
                     await user.save();
                     //enviando jwt 
              } catch (error) {
                     console.log(error.code);
                     //para buscar por email mongodb
                     if (error.code === 11000) {
                            return res.status(400).json({ error: "ya existe este usuario, crea otro" });
                     }
              }
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
       async (req, res) => {

              try {
                     const { email, password } = req.body

                     let user = await User.findOne({ email });
                     if (!user)
                            return res.status(400).json({ error: "no existe este usuario" });

                     const respuestaPassword = await user.comparePassword(password)
                     if (!respuestaPassword)
                            return res.status(403).json({ error: "contraseña incorrecta" })

                     const errors = validationResult(req);
                     if (!errors.isEmpty()) {
                            return res.status(403).json({ errors: errors.array() });
                     }
                     res.json({ ok: "inicio de sesion exitoso" });
              } catch (error) {
                     console.log(error);
                     return res.status(500).json({ error: "error de servidor" })
              }
       })

module.exports = router;