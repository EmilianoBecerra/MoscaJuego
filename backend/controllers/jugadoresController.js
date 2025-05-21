import { leerDB } from "../utils/db.js";


export const obtenerJugador = async (req, res) => {
    try {
        const { idUsuario } = req.query;
        const db = await leerDB();
        const jugador = db.jugadores.find(j => j.usuarioId === idUsuario);
        if (!jugador) {
            return res.status(400).json({ error: "No existe jugador con ese id" });
        }
        return res.status(200).json(jugador);
    } catch (error) {
        console.error('no se pudo encontrar jugador');
        return res.status(400).json({ error: "No se pudo encontrar jugador" })
    }
}