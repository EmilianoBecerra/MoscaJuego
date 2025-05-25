import { useContext } from "react";
import styles from "../Mesa.module.css";
import { useMesa } from "../hooks/useMesa";
import { GameContext } from "../../../context/GameContext";

const Mesa = () => {
  return (
    <div className={styles.divMesa}>
      <p className={styles.mesa}>Mesa {numeroMesa}</p>
      <button className={styles.entrarMesa}>Ingresar a la mesa</button>
    </div>
  );
};

export default Mesa;
