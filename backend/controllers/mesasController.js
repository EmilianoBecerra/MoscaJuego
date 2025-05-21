import { iniciarPartida } from '../services/partidaService.js';
import { crearPartida, crearMesa } from '../utils/crearMesaOPartida.js';
import { guardarDB, leerDB } from '../utils/db.js';

export const crearNuevaMesa = async (req, res) => {
    try {
        const db = await leerDB();
        const mesasCreadas = db.mesas.length;
        const nuevaMesa = crearMesa(mesasCreadas);
        db.mesas.push(nuevaMesa);
        await guardarDB(db);
        res.status(200).json({ nuevaMesa });
    } catch (error) {
        console.error('No se pudo crear una mesa');
        res.status(400).json({ error: 'Error al crear una mesa' });
    }
}


export const mostrarMesas = async (req, res) => {
    try {
        const db = await leerDB();
        const mesas = db.mesas;
        res.status(200).json(mesas);
    } catch (error) {
        console.error('Error al enviar las mesas');
        res.status(400).json({ error: 'Error al enviar todas las mesas' });
    }
}

export const ingresarMesa = async (req, res) => {
    try {
        const db = await leerDB();

        const { idUsuario, idMesa } = req.body;

        const jugador = db.jugadores.find(j => j.usuarioId === idUsuario);
        if (!jugador) return res.status(400).json({ error: 'Jugador no encontrado' });

        const mesa = db.mesas.find(m => m.id === idMesa);
        if (!mesa) return res.status(404).json({ error: 'Mesa no encontrada' });

        if (mesa && !mesa.partidaId) {
            const partida = crearPartida(idMesa);
            if (!partida) return res.status(404).json({ error: "No se pudo crear la partida" });

            if (!mesa.partidaId) {
                mesa.partidaId = partida.partidaId;
                partida.mesaId = mesa.id;
            }
            if (partida.jugadores.length >= 2 && partida.jugadores.length < 4) {
                partida.estado = "Esperando iniciacion"
            }

            partida.estado = "Esperando jugadores";
            partida.jugadores.push(jugador);
            jugador.partidaEnCurso = partida.partidaId;
            mesa.numeroJugadores = partida.jugadores.length;
            db.partidas.push(partida);
            await guardarDB(db);
            res.status(200).json(partida);
        }
        else {
            const partida = db.partidas.find(p => p.mesaId === idMesa);
            res.status(200).json(partida);
        }

    } catch (error) {
        console.error('No se pudo ingresar en la mesa');
        res.status(400).json({ error: 'No se pudo ingresar en la mesa' });
    }
}