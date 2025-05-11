import React, { createContext, useState, useRef } from "react";
import mazo from "./utils/mazo";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const mazoRef = useRef([...mazo]);

  const [cartasJugador1, setCartasJugador1] = useState(Array(5).fill(null));
  const [cartasJugador2, setCartasJugador2] = useState(Array(5).fill(null));
  const [triunfo, setTriunfo] = useState({});
  const [faseJuego, setFaseJuego] = useState(false);
  const [descarte, setDescarte] = useState(false);
  const [indiceCartaPorDescartar, setIndiceCartaPorDescartar] = useState(null);
  const [cartaSeleccionadaJugador1, setCartaSeleccionadaJugador1] = useState(
    {}
  );
  const [cartaSeleccionadaJugador2, setCartaSeleccionadaJugador2] = useState(
    {}
  );
  const [cartasJugadas1, setCartasJugadas1] = useState(Array(5).fill(null));
  const [cartasJugadas2, setCartasJugadas2] = useState(Array(5).fill(null));
  const [indice2CartaPorDescartar, setIndice2CartaPorDescartar] =
    useState(null);
  const [esTurnoJugador1, setEsTurnoJugador1] = useState(true);
  const [primerCartaJugada, setPrimerCartaJugada] = useState({});
  const [cartaGanadora, setCartaGanadora] = useState(undefined);
  const [puntosJugador1, setPuntosJugador1] = useState(15);
  const [puntosJugador2, setPuntosJugador2] = useState(15);
   const [juegaJugador, setJuegaJugador] = useState(null);

  return (
    <GameContext.Provider
      value={{
        cartasJugador1,
        setCartasJugador1,
        cartasJugador2,
        setCartasJugador2,
        triunfo,
        setTriunfo,
        faseJuego,
        setFaseJuego,
        descarte,
        setDescarte,
        indiceCartaPorDescartar,
        setIndiceCartaPorDescartar,
        indice2CartaPorDescartar,
        setIndice2CartaPorDescartar,
        setCartaSeleccionadaJugador1,
        cartaSeleccionadaJugador1,
        cartaSeleccionadaJugador2,
        setCartaSeleccionadaJugador2,
        cartasJugadas1,
        setCartasJugadas1,
        cartasJugadas2,
        setCartasJugadas2,
        esTurnoJugador1,
        setEsTurnoJugador1,
        primerCartaJugada,
        setPrimerCartaJugada,
        cartaGanadora,
        setCartaGanadora,
        puntosJugador1, setPuntosJugador1,
        puntosJugador2, setPuntosJugador2,
        juegaJugador, setJuegaJugador,
        mazoRef,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
