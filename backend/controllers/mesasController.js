import { iniciarPartida } from '../services/partidaService.js';
import { crearPartida, crearMesa } from '../utils/crearMesaOPartida.js';
import { guardarDB, leerDB } from '../utils/db.js';
import { ingresarPartida } from './partidaController.js';

export const crearNuevaMesa = async (req, res) => {
    try {
        const db = await leerDB();
        const mesasCreadas = db.mesas.length;
        const nuevaMesa = crearMesa(mesasCreadas);
        db.mesas.push(nuevaMesa);
        await guardarDB(db);
        res.status(201).json({ nuevaMesa });
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

        if (mesa.estado === "Esperando Jugadores") {
            mesa.numerosJugadores = mesa.numerosJugadores + 1;
            mesa.jugadores.push(jugador.id);
            jugador.mesaId = idMesa;
            jugador.estado = "Observando";
            if (mesa.jugadores.length = 4) {
                mesa.estado === "Mesa llena";
            }
        }
        if (mesa.estado === "Mesa llena") {
            jugador.estado = "Observando";
        }

        await guardarDB(db);
        res.status(200).json(mesa);

    } catch (error) {
        console.error('No se pudo ingresar en la mesa');
        res.status(400).json({ error: 'Error interno del servidor' });
    }
}