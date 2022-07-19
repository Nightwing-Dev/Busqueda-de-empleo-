const express = require("express");
const mongoose = require("mongoose");
const authLoginRegister = require('./routes/login');
const jobOffersRoutes = require('./routes/jobOffers');
const registerRoutes = require('./routes/register');
const registerCurriRoutes = require('./routes/registerCurri')

//variables funcionamiento
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors')

//middlewares
app.use(cors());
app.use(express.json());
app.use("/",
    authLoginRegister,
    jobOffersRoutes,
    registerRoutes,
    registerCurriRoutes);

//conexion de mongodb
mongoose
    .connect("mongodb+srv://Bolsa_07:Diego2020@bolsa-de-empleo-db.8iks7.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('conectado a la base de datos'))
    .catch((error) => console.log(error));

app.listen(port, () => console.error('Servidor Funcionando en el port', port));