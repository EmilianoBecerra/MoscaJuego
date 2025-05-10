import { useContext } from "react";
import { GameContext } from "../GameContext";
import styles from "./CartasSeleccionadas.module.css";

const CartasSeleccionadas = ({ jugadores }) => {
  const {
    cartasJugadas1,
    cartasJugadas2,
  } = useContext(GameContext);
  
  return (
    <div className={styles.cartasJugadas}>
      {jugadores === "Jugador 1"
        ? cartasJugadas1.map((carta, index) => (<img key={index} src={carta?.valor === null ? "/img/reverso.png" : `/img/${carta?.valor}-${carta?.palo}.png`} alt="" width={90} />))
        : cartasJugadas2.map((carta, index) => <img key={index} src={carta?.valor === null ? "/img/reverso.png" : `/img/${carta?.valor}-${carta?.palo}.png`} alt="" width={90} />)
      }
      
    </div>
  );
};

export default CartasSeleccionadas;
