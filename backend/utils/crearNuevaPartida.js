import { v4 as uuid } from 'uuid';

export function crearNuevaPartida ( mesaId) {
    const id = uuid();
    const partida = {
        id,
        mesaId,
        fase: "Esperando jugadores",
        turno: null,
        jugadores: [],
        mazo: [],
        mazoRestante: [],
        rondaActual: 0
    }
}