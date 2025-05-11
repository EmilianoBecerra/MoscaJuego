import React, { useContext, useState } from "react";
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
    juegaJugador,
  } = useContext(GameContext);

  const { repartirCartas, descartarCartas } = useJuegoCartas();

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
        {juegaJugador === null ? (
          ""
        ) : (
          <div
            style={{ display: juegaJugador ? "flex" : "none" }}
            className={styles.juega}
          ></div>
        )}
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
        {juegaJugador === null ? (
          ""
        ) : (
          <div
            style={{ display: !juegaJugador ? "flex" : "none" }}
            className={styles.juega}
          ></div>
        )}
      </div>
    </section>
  );
};

export default Board;
