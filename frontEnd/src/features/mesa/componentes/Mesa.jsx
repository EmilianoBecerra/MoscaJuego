import styles from "../Mesa.module.css";
import { useMesa } from "../hooks/useMesa";

const Mesa = ({ numeroMesa, mesaId }) => {
  
  const { usuarioId, handleClick } = useMesa(mesaId);

  return (
    <div className={styles.divMesa}>
      <p className={styles.mesa}>Mesa {numeroMesa}</p>
      <button className={styles.entrarMesa} onClick={handleClick}>
        Ingresar a la mesa
      </button>
      <p className={styles.jugadoresOnline}>
        {0}/{2}
      </p>
    </div>
  );
};

export default Mesa;
