export function agregarJugadorAMesa(mesa, jugador) {
    mesa.jugadores.push({
        id: jugador.id,
        nombre: jugador.nombreJugador
    })
}

export function agregarJugadorAPartida(partida, jugador) {
    partida.jugadores.push({ ...jugador, descarto: false });
}