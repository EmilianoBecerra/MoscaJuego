import { useContext } from "react";
import { useManoJugador } from "../hooks/useManoJugador";
import styles from "../ManoJugador.module.css";
import { GameContext } from "../../../context/GameContext";

const ManoJugador = ({ jugador }) => {
  const {
    handleClick,
    seleccionarCartas,
    cartasSeleccionadas,
    enviarCartasDescartadas,
    isLoading,
    isError,
  } = useManoJugador();
  const { cartas, partida } = useContext(GameContext);
  return (
    <div className={styles.espacioJugador}>
      <div className={styles.manoJugador}>
        <button
          className={styles.botonIngresar}
          onClick={() => handleClick(jugador)}
        >
          Ingresar Partida
        </button>
      </div>
    </div>
  );
};

export default ManoJugador;
