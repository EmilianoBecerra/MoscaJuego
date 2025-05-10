import { useEffect, useContext } from "react";
import { GameContext } from "../GameContext";

export function useJuegoCartas() {
    const {
        cartasJugador1, setCartasJugador1,
        cartasJugador2, setCartasJugador2, setTriunfo,
        faseJuego, setFaseJuego,
        descarte, setDescarte,
        indiceCartaPorDescartar,
        indice2CartaPorDescartar,
        mazoRef,
        setCartaSeleccionadaJugador1, setCartaSeleccionadaJugador2,
        cartasJugadas1, setCartasJugadas1,
        cartasJugadas2, setCartasJugadas2,
        esTurnoJugador1, setEsTurnoJugador1,
    } = useContext(GameContext);

    useEffect(() => {
        if (!faseJuego) {
            const actualizarCartasJugador1 = (i) => {
                setCartasJugador1((prevItems) => {
                    const copia = [...prevItems];
                    copia[i] = { valor: undefined, palo: undefined };
                    return copia;
                });
            };
            const actualizarCartasJugador2 = (i2) => {
                setCartasJugador2((prevItems) => {
                    const copia = [...prevItems];
                    copia[i2] = { valor: undefined, palo: undefined };
                    return copia;
                });
            };

            if (indiceCartaPorDescartar !== null) {
                actualizarCartasJugador1(indiceCartaPorDescartar);
            }

            if (indice2CartaPorDescartar !== null) {
                actualizarCartasJugador2(indice2CartaPorDescartar);
            }
        }

    }, [indiceCartaPorDescartar, indice2CartaPorDescartar]);


    function repartirCartas() {
        if (!descarte) {
            const cartasMazo = mazoRef.current;
            const jugador1Cartas = [];
            const jugador2Cartas = [];
            for (let i = 0; i < 10; i++) {
                let nCarta = Math.floor(Math.random() * cartasMazo.length + 0);
                const carta = cartasMazo.splice(nCarta, 1)[0];
                if (i % 2 === 0) {
                    jugador2Cartas.push(carta);
                } else {
                    jugador1Cartas.push(carta);
                }
            }
            setCartasJugador1(jugador1Cartas);
            setCartasJugador2(jugador2Cartas);
            setTriunfo(jugador1Cartas[4]);
            setDescarte(true);
        }
    }

    function descartarCartas() {
        if (descarte) {
            const cartasMazo = mazoRef.current;
            const jugador1Cartas = [];
            const jugador2Cartas = [];

            cartasJugador1.map((carta) => {
                if (carta.valor === undefined) {
                    let nCarta = Math.floor(Math.random() * cartasMazo.length + 0);
                    const nuevaCarta = cartasMazo.splice(nCarta, 1)[0];
                    jugador1Cartas.push(nuevaCarta);
                } else {
                    jugador1Cartas.push(carta);
                }
            });
            setCartasJugador1(jugador1Cartas);
            cartasJugador2.map((carta) => {
                if (carta.valor === undefined) {
                    let nCarta = Math.floor(Math.random() * cartasMazo.length + 0);
                    const nuevaCarta = cartasMazo.splice(nCarta, 1)[0];
                    jugador2Cartas.push(nuevaCarta);
                } else {
                    jugador2Cartas.push(carta);
                }
            });
            setCartasJugador2(jugador2Cartas);
        }
        setFaseJuego(true);
    }


    function jugarCartas(i, turno) {
        const cartasSelec1 = cartasJugadas1.slice();
        const cartasSelec2 = cartasJugadas2.slice();
        if (turno) {
            if (!esTurnoJugador1) return;
            cartasSelec1[i] = cartasJugador1[i];
            setCartasJugadas1(cartasSelec1);
            setCartaSeleccionadaJugador1(cartasJugador1[i]);
            setEsTurnoJugador1(prev => !prev);
        }
        else {
            if (esTurnoJugador1) return;
            cartasSelec2[i] = cartasJugador2[i];
            setCartasJugadas2(cartasSelec2);
            setCartaSeleccionadaJugador2(cartasJugador2[i]);
            setEsTurnoJugador1(prev => !prev);
        }
    }

    return {
        repartirCartas,
        descartarCartas,
        jugarCartas
    };
};