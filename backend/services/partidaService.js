import { mazo as mazoOriginal } from '../utils/mazo.js';

function mezclarMazo(mazo) {
    const copiaMazo = [...mazo];
    for (let i = copiaMazo.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copiaMazo[i], copiaMazo[j]] = [copiaMazo[j], copiaMazo[i]];
    }
    return copiaMazo;
}

export function iniciarPartida(partida) {

    const mazoMezclado = mezclarMazo(mazoOriginal);
    const jugadores = partida.jugadores;
    const cantidadCartasPorJugador = 5;

    jugadores.forEach(jugador => {
        jugador.cartas = mazoMezclado.splice(0, cantidadCartasPorJugador);
    });

    const cartaTriunfo = jugadores[jugadores.length - 1].cartas.slice(-1)[0];

    partida.triunfo = cartaTriunfo;
    partida.mazo = [...mazoOriginal];
    partida.mazoRestante = mazoMezclado;
    partida.fase = 'descarte';
}

export function descartarCartasService(partida, idJugador, cartasADescartar) {
    if (partida.fase !== 'descarte') throw new Error('No se puede descartar en esta fase');

    const jugador = partida.jugadores.find(j => j.id === idJugador);
    if (!jugador) throw new Error('Jugador no encontrado');


    cartasADescartar.forEach(carta => {
        const index = jugador.carta.findIndex(c =>
            c.valor === carta.valor && c.palo === carta.palo
        );
        if (index !== -1) {
            jugador.cartas.splice(index, 1);
        }
    })

    while (jugador.cartas.length < 5 && partida.mazoRestante.length > 0) {
        const nuevaCarta = partida.mazoResta.shift();
        jugador.cartas.push(nuevaCarta);
    }

    jugador.descarto = true;
    const todosDescartaron = partida.jugador.every(j => j.descarto);
    if (todosDescartaron) {
        partida.fase = 'jugando';
        partida.jugadorTurnoId = partida.jugadores[0].id;
        partida.jugadores.forEach(j => j.descarto = false);
    }

    return {
        msg: 'Cartas descartas y reemplazadas',
        nuevasCartas: jugador.cartas
    };
}



export function jugarCartaService(partida, idJugador, carta) {
    if (partida.fase !== 'jugando') throw new Error('No se puede jugar cartas todavía');
    const jugador = partida.jugadores.find(j => j.id === idJugador);
    if (!jugador) throw new Error('Jugador no encontrado en la partida');

    if (partida.jugadorTurnoId !== idJugador) throw new Error('No es su turno');

    const indice = jugador.cartas.findIndex(c => c.valor === carta.valor && c.palo === carta.palo);
    if (indice === -1) throw new Error('Carta no encontrada en la mano');

    const cartaJugada = jugador.cartas.splice(indice, 1)[0];
    partida.cartasJugadas.push({ idJugador, carta: cartaJugada });

    const indiceActual = partida.jugadores.findIndex(j => j.id === idJugador);
    const siguienteJugador = partida.jugadores[(indiceActual + 1) % partida.jugadores.length];
    partida.jugadorTurnoId = siguienteJugador.id;

    return {
        msg: 'Carta jugada correctamente',
        cartaJugada,
        siguienteTurno: siguienteJugador.id
    }
}