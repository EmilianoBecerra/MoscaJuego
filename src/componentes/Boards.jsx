import React, { useContext } from "react";
import styles from "./Boards.module.css";
import Boton from "./Boton";
import CartasElegidas from "./CartasElegidas";
import Cartas from "./Cartas";
import { GameContext } from "../GameContext";
import { useJuegoCartas } from "../hooks/useJuegoCartas";

const Board = () => {
  const {
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
    mazoRef,
  } = useContext(GameContext);

  const { repartirCartas, descartarCartas, jugarCartas } = useJuegoCartas();

  return (
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
