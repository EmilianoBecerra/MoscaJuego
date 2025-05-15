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
  const { faseJuego, esTurnoJugador1, setEsTurnoJugador1, descarte, nuevaRonda } =
    useContext(GameContext);
  const [estaSeleccionada, setEstaSeleccionada] = useState(false);
  
  function handleclick() {
    setIndiceCartaPorDescartar(index);
    if (faseJuego) {
      jugarCartas(index, esJugador1);
      if (
        (esJugador1 && esTurnoJugador1) ||
        (!esJugador1 && !esTurnoJugador1)
      ) {
        setEstaSeleccionada(true);
      }
      if (esJugador1 && esTurnoJugador1) {
        setEsTurnoJugador1(false);
      }
      if (!esJugador1 && !esTurnoJugador1) {
        setEsTurnoJugador1(true);
      }
    }
  }
  useEffect(() => {
    setEstaSeleccionada(false);
  },[nuevaRonda])
 
  return (
    <div className={styles.card}>
      <img
        id="img"
        src={
          (valor !== undefined && descarte) ||
          (esJugador1 && esTurnoJugador1 && faseJuego) ||
          (!esJugador1 && !esTurnoJugador1 && faseJuego)
            ? `/img/${valor}-${palo}.png`
            : "/img/reverso.png"
        }
        style={{ display: estaSeleccionada ? "none" : "block" }}
        alt="cartas"
        width={85}
        onClick={handleclick}
      />
    </div>
  );
};

export default Cartas;
