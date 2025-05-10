import { useContext } from "react";
import styles from "./CartasElegidas.module.css";
import { GameContext } from "../GameContext";
import CartaGanadora from "./CartaGanadora";

const CartasElegidas = ({ cartasElegidas }) => {
  const {
    cartaSeleccionadaJugador1,
    cartaSeleccionadaJugador2,
  } = useContext(GameContext);
  return (
    <div className={styles.cartasElegidas}>
      <div className={styles.zonaCartas}>
        <img
          src={
            cartaSeleccionadaJugador1?.valor === undefined
              ? "/img/reverso.png"
              : `/img/${cartaSeleccionadaJugador1?.valor}-${cartaSeleccionadaJugador1?.palo}.png`
          }
          alt="cartas elegidas"
          width={100}
        />
        <p>Jugador 1</p>
      </div>
      <CartaGanadora/>
      <div className={styles.zonaCartas}>
        <img
          src={
            cartaSeleccionadaJugador2?.valor === undefined
              ? "/img/reverso.png"
              : `/img/${cartaSeleccionadaJugador2?.valor}-${cartaSeleccionadaJugador2?.palo}.png`
          }
          alt="cartas elegidas 2"
          width={100}
        />
        <p>jugador2</p>
      </div>
    </div>
  );
};

export default CartasElegidas;
