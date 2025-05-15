import React, { useContext } from "react";
import styles from "./Jugadores.module.css";
import Cartas from "./Cartas";
import CartasSeleccionadas from "./CartasSeleccionadas";
import { GameContext } from "../GameContext";

const Jugadores = ({ jugador }) => {
  const {puntosJugador1, puntosJugador2} = useContext(GameContext);
  return (
    <div className={styles.infoJuegadores}>
      <h2 className={styles.jugadores}>{jugador}</h2>
      <p className={styles.puntos}><strong>Puntos:{jugador === "Jugador 1" ? puntosJugador1 : puntosJugador2}</strong></p>
    </div>
  );
};

export default Jugadores;
