import { v4 as uuid } from "uuid";

export function crearMesa(mesasCreadas) {
    const mesaId = uuid();

    const nuevaMesa = {
        id: mesaId,
        numeroDeMesa: mesasCreadas + 1,
        partidaId: null,
        estado: "vacia",
        password: null,
        idJugadores: null
    }

    return nuevaMesa;
}

export function crearPartida(mesaId) {
    const partidaId = uuid();
    const nuevaPartida = {
        partidaId,
        mesaId: null,
        fase: null,
        rondaActual: 1,
        cartasJugadas: [],
        estado: "sinCrear",
        ganadorRonda: null,
        jugadores: [
        ],
        triunfo: {},
        mazo: [],
        mazoRestante: [],
        turnoJugador: null
    }
    return nuevaPartida;
}