import { v4 as uuid } from 'uuid';

export function crearUsuarioYJugador({ usuario, password }) {
    const usuarioId = uuid();
    const jugadorId = uuid();

    const nuevoUsuario = {
        id: usuarioId,
        usuario,
        password
    };

    const nuevoJugador = {
        id: jugadorId,
        usuarioId,
        nombreJugador: usuario,
        cartas: [],
        puntosglobales: 0,
        online: true,
        estado: 'Conectado',
        puntosPartida: 15,
        esTurno: '',
        mesaId: null,
        partidaEnCurso: null
    };

    return { nuevoUsuario, nuevoJugador };
}