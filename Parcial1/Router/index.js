const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
const upload = require('multer')();

const app = express();
const clientes = require('./Rutas/cliente');  // Importar las rutas desde el archivo cliente.js

// Middlewares
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));
app.use(upload.none());
app.use(bodyParser.xml());

// Uso de las rutas importadas
app.use('/clientes', clientes);  // Todas las rutas de clientes estarán bajo '/clientes'

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${3000}`);
});
