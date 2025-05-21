import ManoJugador from "./ManoJugador";
import styles from "../Tablero.module.css";
import { useTablero } from "../hooks/useTablero";

const Tablero = () => {
  const { partida } = useTablero();
  
  return (
    <div className={styles.mesa}>
      <div className={styles.infoJuego}>
        <table className={styles.tablaPuntuacion}>
          <thead>
            <tr className={styles.filas}>
              {partida.jugadores.map((j, index) => (
                <th key={index} className={styles.columnas}>
                  {j.nombreJugador ? j.nombreJugador : `Jugadores`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className={styles.filas}>
              {
                partida.jugadores.map((j,index) => (
                  <td key={index} className={styles.columnas}>{j.puntosPartida}</td>
                ))
              }
            </tr>
          </tbody>
        </table>
        <section className={styles.infoCartas}>
          <p>Triunfo:</p>
          <p>Tiempo de partida:</p>
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
          <p>Cartas jugadas</p>
        </div>
      </div>
    </div>
  );
};

export default Tablero;
