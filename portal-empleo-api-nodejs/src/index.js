const express = require("express");
const mongoose = require("mongoose");
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');

//variables funcionamiento
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use('/api', registerRoutes, loginRoutes);


//rutas
app.get("/", (req, res) => {
    res.send('servidor funcionando correctamente');
});

//conexion de mongodb
mongoose
    .connect("mongodb+srv://Bolsa_07:Diego2020@bolsa-de-empleo-db.8iks7.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('conectado a la base de datos'))
    .catch((error) => console.log(error));

app.listen(port, () => console.error('Servidor Funcionando en el port', port));