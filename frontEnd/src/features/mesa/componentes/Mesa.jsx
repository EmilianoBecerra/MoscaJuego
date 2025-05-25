import { useContext } from "react";
import styles from "../Mesa.module.css";
import { useMesa } from "../hooks/useMesa";
import { GameContext } from "../../../context/GameContext";

const Mesa = ({ numeroMesa, mesaId, jugadores }) => {
  const { handleClick } = useMesa(mesaId);
  const { mesa } = useContext(GameContext);
  return (
    <div className={styles.divMesa}>
      <p className={styles.mesa}>Mesa {numeroMesa}</p>
      <button className={styles.entrarMesa} onClick={handleClick}>
        Ingresar a la mesa
      </button>
    </div>
  );
};

export default Mesa;
