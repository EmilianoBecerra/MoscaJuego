import { crearNuevaPartida } from '../utils/crearNuevaPartida.js';
import { guardarDB, leerDB } from '../utils/db.js'
import { mezclarArray, mezclarMazoYRepartirCartas } from '../utils/mezclarMazoYRepartirCartas.js';




export const crearPartida = async (req, res) => {
    try {
        const db = leerDB();
        const { usuarioId, mesaId } = req.body;

        const jugador = db.jugadores.find(j => j.usuarioId === usuarioId);
        if (!jugador) return res.status(401).json({ error: 'Error al buscar jugador' });

        const mesa = db.mesas.find(m => m.id === mesaId);
        if (!mesa) return res.status(401).json({ error: 'Error al buscar la mesa' });

        const { mazoMezclado, cartasRepartidas } = mezclarMazoYRepartirCartas();

        let partida;

        if (!mesa.partidaId) {
            partida = crearNuevaPartida(mesa.id);
            if (!partida) return res.status(401).json({ error: 'No se pudo crear la partida' });
            mesa.partidaId = partida.id;
            db.partidas.push(partida);
        } else {
            partida = db.partidas.find(p => p.id === mesa.partidaId);
            if (!partida) return res.status(500).json({ error: 'Partida referenciada no encontrada' })
        }


        partida.fase = 'Esperando inicialización';
        partida.turno = "Esperando descarte";
        if (partida.jugadores.length < 4) {
            partida.jugadores.push(jugador);
            jugador.cartas = cartasRepartidas;
        }
        partida.mazo = mazoMezclado;
        jugador.partidaEnCurso = partida.id;
        jugador.estado = "Esperando descarte";
        mesa.partidaId = partida.id;

        db.partidas.push(partida);
        await guardarDB(db);

    } catch (error) {
        return res.status(400).json({ error: 'Error interno del servidor al crear la partida' });
    }
}




export const enviarPartida = async (req, res) => {
    try {
        const db = await leerDB();
        const { partidaId } = req.query;
        const partida = db.partidas.find(p => p.id === partidaId);
        if (!partida) return res.status(400).json({ error: 'No existe partida' });

        res.status(200).json(partida);
    } catch (error) {
        console.error('Error al enviar una partida', error);
        res.status(400).json({ error: 'Error al enviar la partida' });
    }
}




export const ingresarPartida = async (req, res) => {
    try {
        const db = await leerDB();
        const { usuarioId, mesaId, partidaId } = req.body;

        const partida = db.partidas.find(p => p.id === partidaId);
        if (!partida) return res.status(400).json({ error: 'No se encontró partida' });

        const jugadorPartida = partida.jugadores.find(j => j.usuarioId === usuarioId);
        if (!jugadorPartida) return res.status(400).json({ error: 'No se encontró jugador' });

        const mesa = db.mesas.find(m => m.id === mesaId);
        if (!mesa) return res.status(400).json({ error: 'No se encontró mesa' });

        let cartas = jugadorPartida.cartas;

        if (cartas.length === 0) {
            const { cartasRepartidas, mazoMezclado } = mezclarMazoYRepartirCartas();
            jugadorPartida.cartas.push(...cartasRepartidas);
            jugadorPartida.esTurno = 'Descarte';
            partida.mazoRestante = mazoMezclado;
        }

        //aca deberia ser mayor o igual a 2
        if (partida.jugadores.length >= 1) {
            partida.fase = 'Descarte';
        }

        await guardarDB(db);
        res.status(200).json(cartas);
    } catch (error) {
        console.log(error);
    }
}


export const descartarCartas = async (req, res) => {
    try {
        const db = await leerDB();
        const { usuarioId, partidaId, cartas } = req.body;

        const partida = db.partidas.find(p => p.id === partidaId);
        if (!partida) return res.status(404).json({ error: 'No se encontró partida' });

        const jugador = partida.jugadores.find(j => j.usuarioId === usuarioId);
        if (!jugador) return res.status(404).json({ error: 'No se encontró jugador ' })

        if (jugador.esTurno !== 'Descarte') return res.status(400).json({ error: 'Ya descartaste tus cartas' });

        if (jugador.esTurno === 'Descarte') {
            if (!jugador.cartas) jugador.cartas = [];

            jugador.cartas = jugador.cartas.filter(c => !cartas.includes(c.id));

            const nuevasCartas = [];

            for (let i = 0; i < cartas.length; i++) {
                const nuevaCarta = partida.mazoRestante.pop();
                if (nuevaCarta) nuevasCartas.push(nuevaCarta);
            }

            jugador.cartas.push(...nuevasCartas);
            jugador.esTurno = false;
        }

        const todosDescartaron = partida.jugadores.every(j => j.esTurno === false);

        if (todosDescartaron) {
            partida.fase = 'Juego';
            partida.turnoJugador = partida.jugadores[0].id;
        }

        await guardarDB(db);

        res.status(200).json(jugador.cartas);

    } catch (error) {
        console.error('Error al descartar cartas', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}