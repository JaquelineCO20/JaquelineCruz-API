const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer')
const mysql = require('mysql2/promise')
const bodyParser = require('body-parser')
require('body-parser-xml')(bodyParser)
const upload = multer();

app.use(cors({origin:"*"})) //app.use(cors()) //middleware de terceros
app.use(express.json());
app.use(express.text()); //middleware incorporado en express
// Función para crear la conexión.
async function createConnection() {
return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'pruebas',
    });
}

let connection;

// Inicia la conexión y maneja posibles errores
async function startServer() {
try {
    connection = await createConnection();
    console.log('Conexión a la base de datos establecida');

    // Aquí se configura el servidor
    app.use(cors());                                // Middleware de terceros
    app.use(express.json());                        // Middleware incorporado en Express
    app.use(express.text());                        // Middleware para texto
    app.use(express.urlencoded({ extended: true })); // Middleware para parsear un formulario URL en Code
    app.use(upload.none());                         // Middleware para parsear form-data
    app.use(bodyParser.xml());     
    
    app.get('/personas', async (req, res) => {
      const idPersona = req.query.idPersona;  // Obtiene el parámetro de la URL
    
      try {
        let results;
        
        if (idPersona) {
          // Si se proporciona un idPersona, traer solo el registro correspondiente
          [results] = await connection.execute(
            'SELECT * FROM personas WHERE idPersona = ?',
            [idPersona]  // Parámetro de la consulta
          );
          
          if (results.length > 0) {
            return res.json(results[0]);  // Devuelve solo el primer resultado
          } else {
            return res.status(404).json({ error: 'Persona no encontrada o no existe' });
          }
          
        } else {
          // Si no se proporciona idPersona, traer todos los registros
          [results] = await connection.execute('SELECT * FROM personas');
          return res.json(results);  // Devuelve todos los resultados
        }
        
      } catch (err) {
        console.error('Error en la consulta:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
    });
    // Ruta para agregar una nueva persona (POST)
    app.post('/personas', async (req, res) => {
      const { nombre, apP, apM, telefono, edad, fechaNacimiento, correo } = req.body;
    
      // Validación de los datos
      if (!nombre || !apP || !apM || !telefono || !edad || !fechaNacimiento || !correo) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
    
      try {
        const [result] = await connection.execute(
          'INSERT INTO personas (nombre, apP, apM, telefono, edad, fechaNacimiento, correo) VALUES (?, ?, ?, ?, ?, ?, ?)',
          [nombre, apP, apM, telefono, edad, fechaNacimiento, correo]
        );
    
        // Verifica si la inserción fue exitosa
        if (result.affectedRows > 0) {
          return res.status(201).json({ message: 'Persona agregada correctamente', idPersona: result.insertId });
        } else {
          return res.status(500).json({ error: 'Error al agregar la persona' });
        }
      } catch (err) {
        console.error('Error en la inserción:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
      }
    });
    
// Ruta para eliminar una persona (DELETE)
app.delete('/personas', async (req, res) => {
  const idPersona = req.query.idPersona;

  if (!idPersona) {
    return res.status(400).json({ error: 'idPersona es requerido para eliminar un registro' });
  }

  try {
    const [result] = await connection.execute(
      'DELETE FROM personas WHERE idPersona = ?',
      [idPersona]
    );

    if (result.affectedRows > 0) {
      return res.json({ message: 'Persona eliminada correctamente' });
    } else {
      return res.status(404).json({ error: 'Persona no encontrada o no existe' });
    }
  } catch (err) {
    console.error('Error en la eliminación:', err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});
app.listen(3000, () => {
  console.log('Server Express escuchando en puerto 3000');
  });

  } catch (error) {
  console.error('Error al conectar a la base de datos:', error);
  }
}
startServer();

    // Parseador de XML

    // // Ruta para obtener el usuario por Id_Usuario
    // app.get('/personas', async (req, res) => {
    //   let consulta='';
    //   const idPersona = req.query.idPersona;  // Obtiene el parámetro de la URL

    // if (!idPersona) {
    //     return res.status(400).json({ error: 'idPersona es requerido' });
    // }
    // try {
    //     const [results, fields] = await connection.execute(
    //       'SELECT * FROM personas WHERE idPersona = ?',
    //       [idPersona]  // Parámetro de la consulta
    //     );

    //     if (results.length > 0) {
    //       return res.json(results[0]);  // Devuelve solo el primer resultado
    //     } else {
    //     return res.status(404).json({ error: 'Persona no encontrada' });
    //     }
    // } catch (err) {
    //     console.error('Error en la consulta:', err);
    //     return res.status(500).json({ error: 'Error interno del servidor' });
    // }
    // });