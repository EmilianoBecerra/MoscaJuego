import { v4 as uuid } from "uuid";

export function crearMesa(mesasCreadas) {
    const id = uuid();

    const nuevaMesa = {
        id,
        numeroDeMesa: mesasCreadas + 1,
        partidaId: null,
        estado: "Esperando Jugadores",
        password: null,
        numerosJugadores: 0,
        jugadores: []
    }

    return nuevaMesa;
}

export function crearPartida(mesaId) {
    const id = uuid();
    const nuevaPartida = {
        id,
        mesaId,
        fase: null,
        rondaActual: 1,
        cartasJugadas: [],
        estado: "sinCrear",
        ganadorRonda: null,
        jugadores: [
        ],
        triunfo: null,
        mazo: [],
        mazoRestante: [],
        turnoJugador: null
    }
    return nuevaPartida;
}