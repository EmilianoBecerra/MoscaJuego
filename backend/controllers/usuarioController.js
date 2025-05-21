
import { crearUsuarioYJugador } from "../utils/crearUsuarioYJugador.js";
import { leerDB, guardarDB } from "../utils/db.js";


export const crearUsuario = async (req, res) => {
    try {
        const db = await leerDB();
        const { usuario, password } = req.body
        const existe = db.usuarios.find(u => u.usuario === usuario);
        if (existe) return res.status(409).json({ error: "El usuario ya existe" });

        const { nuevoUsuario, nuevoJugador } = crearUsuarioYJugador({ usuario, password });

        db.usuarios.push(nuevoUsuario);
        db.jugadores.push(nuevoJugador);

        await guardarDB(db);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        console.error("Error al crear un nuevo jugador:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

export const obtenerUsuario = async (req, res) => {
    try {
        const { usuario, password } = req.body;
        const db = await leerDB();

        const usuarioEncontrado = db.usuarios.find(u => u.usuario === usuario && u.password === password);
        if(!usuarioEncontrado) {
            const existeUsuario = db.usuarios.find(u => u.usuario === usuario);
            if(!existeUsuario){
                return res.status(409).json({error: "No existe usuario"});
            } else {
                return res.status(409).json({error: "Contraseña incorrecta"});
            }
        }
        const usuarioDevolver = {usuario: usuarioEncontrado.usuario , id: usuarioEncontrado.id};
        return res.status(200).json(usuarioDevolver);    
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ error: "Error al intentar obtener usuario" });
    }
}