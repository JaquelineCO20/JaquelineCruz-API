const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

// Crear conexión a la base de datos
async function createConnection() {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '', 
        database: 'pruebas',
    });
}

// Ruta para obtener todas las personas o una persona por idPersona
router.get('/', async (req, res) => {
    const idPersona = req.query.idPersona;

    try {
        const connection = await createConnection();
        let results;

        if (idPersona) {
            [results] = await connection.execute('SELECT * FROM personas WHERE idPersona = ?', [idPersona]);
            if (results.length > 0) {
                return res.json(results[0]);  // Si encuentra el idPersona, devuelve el primer resultado
            } else {
                return res.status(404).json({ error: 'Persona no encontrada' });
            }
        } else {
            [results] = await connection.execute('SELECT * FROM personas');
            return res.json(results);  // Devuelve todos los resultados
        }
    } catch (err) {
        console.error('Error en la consulta:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta para agregar una nueva persona
router.post('/', async (req, res) => {
    const { nombre, apP, apM, telefono, edad, fechaNacimiento, correo } = req.body;

    if (!nombre || !apP || !apM || !telefono || !edad || !fechaNacimiento || !correo) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        const connection = await createConnection();
        const [result] = await connection.execute(
            'INSERT INTO personas (nombre, apP, apM, telefono, edad, fechaNacimiento, correo) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [nombre, apP, apM, telefono, edad, fechaNacimiento, correo]
        );

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

// Ruta para eliminar una persona
router.delete('/', async (req, res) => {
    const idPersona = req.query.idPersona;

    if (!idPersona) {
        return res.status(400).json({ error: 'idPersona es requerido para eliminar un registro' });
    }

    try {
        const connection = await createConnection();
        const [result] = await connection.execute('DELETE FROM personas WHERE idPersona = ?', [idPersona]);

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

module.exports = router;  // Exportar las rutas para que se puedan usar en index.js
