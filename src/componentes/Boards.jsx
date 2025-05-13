import React, { useContext, useEffect, useState } from "react";
import styles from "./Boards.module.css";
import Boton from "./Boton";
import CartasElegidas from "./CartasElegidas";
import Cartas from "./Cartas";
import { GameContext } from "../GameContext";
import { useJuegoCartas } from "../hooks/useJuegoCartas";

const Board = () => {
  const {
    cartasJugador1,
    cartasJugador2,
    faseJuego,
    descarte,
    setIndiceCartaPorDescartar,
    setIndice2CartaPorDescartar,
    puntosJugador1,
    puntosJugador2,
    setPuntosJugador1,
    setPuntosJugador2
  } = useContext(GameContext);
  const { repartirCartas, descartarCartas, reiniciarJuego } = useJuegoCartas();
  const [ganador, setGanador] = useState("");

  useEffect(() => {
    if (puntosJugador1 === 0) {
      setGanador("Jugador 1");
    }
    if (puntosJugador1 === 0) {
      setGanador === 0;
    }
  }, [puntosJugador1, puntosJugador2]);

  function handleClick() {
    setPuntosJugador1(15);
    setPuntosJugador2(15);
    reiniciarJuego();

  }

  return puntosJugador1 === 0 || puntosJugador2 === 0 ? (
    <section>
      <p>Gano {ganador} </p>
      <button onClick={handleClick}>Jugar de nuevo</button>
    </section>
  ) : (
    <section
      className={faseJuego ? styles.cartasJugadoresRepartidas : styles.board}
    >
      <div className={styles.cartas}>
        {cartasJugador1?.map((carta, index) => (
          <Cartas
            key={index}
            valor={carta?.valor}
            palo={carta?.palo}
            index={index}
            faseJuego={faseJuego}
            setIndiceCartaPorDescartar={setIndiceCartaPorDescartar}
            esJugador1={true}
          />
        ))}
      </div>
      {faseJuego ? (
        <CartasElegidas />
      ) : (
        <Boton
          faseJuego={faseJuego}
          descarte={descarte}
          repartirCartas={repartirCartas}
          descartarCartas={descartarCartas}
        />
      )}
      <div className={styles.cartas}>
        {cartasJugador2?.map((carta, index) => (
          <Cartas
            key={index}
            valor={carta?.valor}
            palo={carta?.palo}
            index={index}
            faseJuego={faseJuego}
            setIndiceCartaPorDescartar={setIndice2CartaPorDescartar}
            esJugador1={false}
          />
        ))}
      </div>
    </section>
  );
};

export default Board;
