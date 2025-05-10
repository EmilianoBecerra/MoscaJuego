import React, { useContext } from "react";
import styles from "./Jugadores.module.css";
import Cartas from "./Cartas";
import CartasSeleccionadas from "./CartasSeleccionadas";

const Jugadores = ({ jugador }) => {
  return (
    <div className={styles.infoJuegadores}>
      <h2>{jugador}</h2>
      <p>Puntos: 15</p>
      <CartasSeleccionadas jugadores={jugador}/>
    </div>
  );
};

export default Jugadores;
