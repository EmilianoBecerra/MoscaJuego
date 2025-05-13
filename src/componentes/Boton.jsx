import styles from "./Boton.module.css";

const Boton = ({ noBoton, descarte, descartarCartas, repartirCartas }) => {
  return (
    <div className={styles.start}>
      <hr style={{ display: noBoton ? "none" : "block" }} />
      <button
        onClick={descarte ? descartarCartas : repartirCartas}
      >
        {!descarte ? "Repartir" : "Descarte"}
      </button>
      <hr style={{ display: noBoton ? "none" : "block" }} />
    </div>
  );
};

export default Boton;
