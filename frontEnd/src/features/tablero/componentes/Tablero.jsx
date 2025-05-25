import ManoJugador from "./ManoJugador";
import styles from "../Tablero.module.css";
import { useTablero } from "../hooks/useTablero";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const Tablero = () => {
  const { partida } = useContext(GameContext);
  /* const { isLoading } = useTablero();

  if (!partida) {
    if (isLoading) return <p style={{ color: "white" }}>cargando...</p>;
  } */

  return (
    <div className={styles.mesa}>
      <div className={styles.infoJuego}>
        <table className={styles.tablaPuntuacion}>
          <thead>
            <tr className={styles.filas}></tr>
          </thead>
          <tbody>
            <tr className={styles.filas}></tr>
          </tbody>
        </table>
        <section className={styles.infoCartas}>
          <p>Tiempo de partida:</p>
          <p>60</p>
          <article>
            <p>Tutorial</p>
          </article>
          <button>Salir de la Mesa</button>
        </section>
      </div>

      <div className={styles.manoJugadores}>
        <div className={`${styles.arriba} ${styles.manoJugador}`}>
          <ManoJugador />
        </div>
        <div className={`${styles.derecha} ${styles.manoJugador}`}>
          <ManoJugador />
        </div>
        <div className={`${styles.abajo} ${styles.manoJugador}`}>
          <ManoJugador />
        </div>
        <div className={`${styles.izquierda} ${styles.manoJugador}`}>
          <ManoJugador />
        </div>

        <div className={styles.mesaCentro}>
          <p>Esperando jugadores</p>
        </div>
      </div>
    </div>
  );
};

export default Tablero;
