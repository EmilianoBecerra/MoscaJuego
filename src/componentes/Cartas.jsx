import { use, useEffect, useState } from "react";
import styles from "./Card.module.css";

const Cartas = ({
  valor,
  palo,
  index,
  setIndice,
  noBoton,
  setIndiceCartaElegida,
  elegirCarta
}) => {
  function handleclick() {
    if (setIndice === null) return;
    setIndice(index);
  }

  function elegirCarta() {
    setIndiceCartaElegida(index);
  }
  return (
    <div className={styles.card}>
      <img
        id="img"
        src={
          /* index === 4 &&  */ valor !== undefined
            ? `/img/${valor}-${palo}.png`
            : "/img/reverso.png"
        }
        alt="reverso cartas"
        width={90}
        onClick={!noBoton ? handleclick : elegirCarta}
      />
    </div>
  );
};

export default Cartas;
