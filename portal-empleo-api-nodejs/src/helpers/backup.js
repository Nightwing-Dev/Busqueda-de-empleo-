//Antigua version de registro V.1
/*router.post('/register',

       body("email", "Formato De Email Incorrecto")
              .trim()
              .isEmail()
              .normalizeEmail(),
       body("password", "password formato incorrecto", "minimo 6 caracteres")
              .trim()
              .isLength({ min: 6 }),

       async (req, res) => {

              try {
                     const { email, password, } = req.body
                     //[para buscar por el email y no se repita] 
                     user = new User({ email, password });
                     await user.save();

                     const user = await User.findOne({ email });
                     if (user) throw { code: 11000 };

                    
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
*/