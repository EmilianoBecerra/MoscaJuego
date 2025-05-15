import { useContext, useEffect } from "react";
import styles from "./CartasElegidas.module.css";
import { GameContext } from "../GameContext";
import CartaGanadora from "./CartaGanadora";
import CartasSeleccionadas from "./CartasSeleccionadas";

const CartasElegidas = ({ cartasElegidas }) => {
  const {
    cartaSeleccionadaJugador1,
    cartaSeleccionadaJugador2,
    cartaGanadora,
    cartasJugador1,
    setCartaSeleccionadaJugador1,
    setCartaSeleccionadaJugador2,
    esTurnoJugador1,
    setEsTurnoJugador1,
    setCartaGanadora,
    setPuntosJugador1,
    setPuntosJugador2,
    setDescarte,
    triunfo
  } = useContext(GameContext);
  useEffect(() => {
    setDescarte(false);
  },[])
  return (
    <div className={styles.cartasElegidas}>
      <div className={styles.zonaCartas}>
        <img
          src={
            cartaSeleccionadaJugador2?.valor === undefined
              ? "/img/reverso.png"
              : `/img/${cartaSeleccionadaJugador2?.valor}-${cartaSeleccionadaJugador2?.palo}.png`
          }
          alt="cartas elegidas"
          width={90}
        />
        <p>Jugador 1</p>
      </div>
      <CartasSeleccionadas />
      <div className={styles.zonaCartas}>
        <img
          src={
            cartaSeleccionadaJugador1?.valor === undefined
              ? "/img/reverso.png"
              : `/img/${cartaSeleccionadaJugador1?.valor}-${cartaSeleccionadaJugador1?.palo}.png`
          }
          alt="cartas elegidas 2"
          width={90}
        />
        <p>jugador2</p>
      </div>
    </div>
  );
};

export default CartasElegidas;
