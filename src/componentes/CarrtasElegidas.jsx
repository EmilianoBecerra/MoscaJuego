import styles from "./CartasElegidas.module.css";

const CartasElegidas = ({cartasElegidas}) => {
    console.log(cartasElegidas);
  return (
    <div className={styles.cartasElegidas}>
      <div className={styles.zonaCartas}>
        <img src="/img/reverso.png" alt="cartas elegidas"  width={100} />
        <p>Jugador 1</p>
      </div>
      <p>En Juego</p>
      <div className={styles.zonaCartas}>
        <img src="/img/reverso.png" alt="cartas elegidas 2"  width={100} />
        <p>jugador2</p>
      </div>
    </div>
  );
};

export default CartasElegidas;
