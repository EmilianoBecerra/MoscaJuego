import { guardarDB, leerDB } from "../utils/db.js";
import { crearUsuario } from "../utils/usuarios.js";


export const registrarUsuario = async (req, res) => {
    try {
        const db = await leerDB();
        const { nombreUsuario, correo, password } = req.body;

        if (!/^[\w-]{8,}$/.test(nombreUsuario)) return res.status(400).json({ error: 'El usuario no puede tener caracteres especiales' });
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo)) return res.status(400).json({ error: 'El correo no es válido' });
        if (!/^[\w-!._$&/:;]{8,}$/.test(password)) return res.status(400).json({ error: 'La contraseña no es válida' });

        const existeUsuario = db.usuarios.find(u => u.nombreUsuario === nombreUsuario);
        const existeCorreo = db.usuarios.find(u => u.correo === correo);

        if (existeCorreo) return res.status(400).json({ error: 'Existe una cuenta con este correo' });
        if (existeUsuario) return res.status(400).json({ error: 'El usuario ya existe' });

        const nuevoUsuario = crearUsuario(nombreUsuario, password, correo);
        if (!nuevoUsuario) return res.status(502).json({ error: 'Error al crear un nuevo usuario' });

        db.usuarios.push(nuevoUsuario);

        await guardarDB(db);
        return res.status(200).json({ mensaje: 'Usuario creado con éxito', usuarioId: nuevoUsuario.id });

    } catch (error) {
        console.error('No se pudo crear usuario: registrarUsuario backend', error);
        res.status(500).json({ error: 'Error interno servidor en registrarUsuario' });
    }
}


export const obtenerUsuario = async (req, res) => {
    try {
        const db = leerDB();
        const { nombreUsuario, password } = req.body;

        if (!password) return res.status(400).json({ error: 'Contraseña obligatoria' });

        const usuario = db.usuarios.find(u => u.nombreUsuario === nombreUsuario || u.correo === nombreUsuario);
        if (!usuario) return res.status(400).json({ error: 'No se encontró usuario con ese nombre o correo' });

        const passwordValida = bcrypt.compareSync(password, usuario.passwordHash);
        if (!passwordValida) return res.status(400).json({ error: 'La contraseña no es correcta' });

        if ((nombreUsuario === usuario.nombreUsuario || usuarioCorreo === usuario.correo) && passwordValida) {
            return res.status(200).json({ mensaje: 'Login exitoso', usuarioId: usuario.id, nombre: usuario.nombreUsuario })
        }
    } catch (error) {
        console.error('No se pudo obtener usuario: obtenerUsuario backend', error);
        res.status(500).json({ error: 'Error interno servidor en obtenerUsuario' })
    }
}