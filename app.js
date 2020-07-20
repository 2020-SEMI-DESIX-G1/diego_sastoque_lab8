//Variables de entorno
require('dotenv').config()

//Dependencias y variables de trabajo
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connectDb = require('./dbConfig');


const estudiantes = require('./routes/estudiantes');

const PORT = 3000;

// Configuracion
app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use( '/' , estudiantes );





connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Ejecutando en el puerto ${PORT}`);
        });
    })
    .catch((e) => {
        console.log(`Este es el error: ${e}`);
    });