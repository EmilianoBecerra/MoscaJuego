export function jugadorYaEstaEnlaMesa(mesa, idJugador) {
    return mesa.jugadores.some(j => j.id === idJugador);
}

export function jugadorYaEstaEnlaPartida(partida, idJugador) {
    return partida.jugadores.some(j => j.id === idJugador);
}

export function mesaLlena(mesa) {
    return mesa.jugadores.length >=4;
}