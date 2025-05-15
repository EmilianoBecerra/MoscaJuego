 import React, { useContext } from "react";
import styles from "./NuevaRonda.module.css";
import { GameContext } from "../GameContext";
import { useJuegoCartas } from "../hooks/useJuegoCartas";

const NuevaRonda = () => {
  const { reiniciarJuego } = useJuegoCartas();
  const { hayGanador } = useContext(GameContext);

  if (!hayGanador) return null;

  const handleClick = () => {
    reiniciarJuego();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>¡Fin de la ronda!</h2>
        <button onClick={handleClick} className={styles.botonModal}>Comenzar nueva ronda</button>
      </div>
    </div>
  );
};

export default NuevaRonda;
