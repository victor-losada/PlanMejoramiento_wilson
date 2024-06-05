import { conexion } from "../database/conexion.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';




export const registrarUsuario = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verificar si el usuario ya existe en la base de datos
        const [rows] = await conexion.query('SELECT * FROM usuarios WHERE username = ?', [username]);

        if (rows.length > 0) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Generar el hash de la contraseña
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Insertar el nuevo usuario en la base de datos
        await conexion.query('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, hashedPassword]);

        return res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor: ' + error.message });
    }
};


export const validarToken = async (req, res, next) => {
    let token_user = req.headers['token'];
    if (!token_user) {
      res.status(402).json({ "mensaje": "se requiere un token" });
    } else {
      try {
        const decode = jwt.verify(token_user, process.env.SECRET);
        next();
      } catch (error) {
        res.status(401).json({ "mensaje": "token invalido" });
      }
    }
  }
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const [rows] = await conexion.query('SELECT * FROM usuarios WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const storedPassword = rows[0].password;

        const passwordMatch = await bcryptjs.compare(password, storedPassword);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ userId: rows[0].id, username: rows[0].username }, process.env.SECRET, { expiresIn: process.env.TIME });

        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Error en el servidor: ' + error.message });
    }
};
