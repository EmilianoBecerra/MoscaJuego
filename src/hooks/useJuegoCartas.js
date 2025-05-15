import { useEffect, useContext, useRef } from "react";
import { GameContext } from "../GameContext";
import mazo from "../utils/mazo";

export function useJuegoCartas() {
    const {
        cartasJugador1, setCartasJugador1,
        cartasJugador2, setCartasJugador2,
        setTriunfo,
        setEsTurnoJugador1,
        esTurnoJugador1,
        faseJuego, setFaseJuego,
        setPrimerCartaJugada,
        descarte, setDescarte,
        indiceCartaPorDescartar,
        indice2CartaPorDescartar,
        setCartaSeleccionadaJugador1, setCartaSeleccionadaJugador2,
        cartasJugadas1, setCartasJugadas1,
        cartasJugadas2, setCartasJugadas2,
        setNuevaRonda,
        setCartaGanadora,
        setIndiceCartaPorDescartar,
        setIndice2CartaPorDescartar,
        mazoRef,
        setHistorialRondas,
        setHayGanador
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
        if (!descarte && !faseJuego) {
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
            setEsTurnoJugador1(true);
        }
    }

    function descartarCartas() {
        if (descarte) {
            setNuevaRonda(false);
            const cartasMazo = mazoRef.current;
            const jugador1Cartas = [];
            const jugador2Cartas = [];

            cartasJugador1.forEach((carta) => {
                if (carta.valor === undefined) {
                    let nCarta = Math.floor(Math.random() * cartasMazo.length + 0);
                    const nuevaCarta = cartasMazo.splice(nCarta, 1)[0];
                    jugador1Cartas.push(nuevaCarta);
                } else {
                    jugador1Cartas.push(carta);
                }
            });
            setCartasJugador1(jugador1Cartas);
            cartasJugador2.forEach((carta) => {
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


    function jugarCartas(i, esJugador1) {
        if (esJugador1) {
            if (!esTurnoJugador1) return;
            const cartaJugada = cartasJugador1[i];
            setCartasJugadas1((prev) => [...prev, cartaJugada]);
            setCartaSeleccionadaJugador1(cartasJugador1[i]);
            if ((cartasJugadas1.length === 5 & cartasJugadas2.length === 4) || (cartasJugadas1.length === 4 & cartasJugadas2.length === 5)) {
                setHayGanador(true);
            }
        }
        else {
            if (esTurnoJugador1) return;
            const cartaJugada = cartasJugador2[i];
            setCartasJugadas2((prev) => [...prev, cartaJugada]);
            setCartaSeleccionadaJugador2(cartasJugador2[i]);
            if ((cartasJugadas1.length === 5 & cartasJugadas2.length === 4) || (cartasJugadas1.length === 4 & cartasJugadas2.length === 5)) {
                setHayGanador(true);
            }
        }
    }

    function reiniciarJuego() {
        mazoRef.current = [...mazo];
        setCartasJugador1(Array(5).fill(null))
        setCartasJugador2(Array(5).fill(null));
        setFaseJuego(false);
        setDescarte(false);
        setIndiceCartaPorDescartar(null);
        setCartaSeleccionadaJugador1({})
        setCartaSeleccionadaJugador2({})
        setCartasJugadas1([]);
        setCartasJugadas2([]);
        setIndice2CartaPorDescartar(null);
        setEsTurnoJugador1(true);
        setPrimerCartaJugada({});
        setCartaGanadora(undefined);
        setNuevaRonda(true);
        setHistorialRondas([]);
        setHayGanador(false);
    }

    return {
        repartirCartas,
        descartarCartas,
        jugarCartas,
        reiniciarJuego
    };
};