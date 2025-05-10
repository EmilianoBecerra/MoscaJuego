import { useContext, useEffect, useState } from "react";
import styles from "./Cartas.module.css";
import { useJuegoCartas } from "../hooks/useJuegoCartas";
import { GameContext } from "../GameContext";

const Cartas = ({
  valor,
  palo,
  index,
  setIndiceCartaPorDescartar,
  esJugador1,
}) => {
  const { jugarCartas } = useJuegoCartas();
  const { faseJuego, esTurnoJugador1 } = useContext(GameContext);
  const [estaSeleccionada, setEstaSeleccionada] = useState(false);
  function handleclick() {
    setIndiceCartaPorDescartar(index);
    if (faseJuego) {
      jugarCartas(index, esJugador1);
      if (
        (faseJuego && esTurnoJugador1 && esJugador1) ||
        (!esJugador1 && !esTurnoJugador1)
      )
        setEstaSeleccionada(true);
    }
  }

  return (
    <div className={styles.card}>
      <img
        id="img"
        src={
          valor !== undefined ? `/img/${valor}-${palo}.png` : "/img/reverso.png"
        }
        style={{ display: estaSeleccionada ? "none" : "block" }}
        alt="reverso cartas"
        width={90}
        onClick={handleclick}
      />
    </div>
  );
};

export default Cartas;
