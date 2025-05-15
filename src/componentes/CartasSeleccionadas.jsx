import { useContext, useEffect } from "react";
import { GameContext } from "../GameContext";
import styles from "./CartasSeleccionadas.module.css";
import compararCartas from "../utils/cartaGanadora";
import NuevaRonda from "./NuevaRonda";

const CartasSeleccionadas = () => {
  const {
    cartaSeleccionadaJugador1,
    cartaSeleccionadaJugador2,
    cartasJugador1,
    setCartaGanadora,
    setCartaSeleccionadaJugador1,
    setCartaSeleccionadaJugador2,
    setEsTurnoJugador1,
    esTurnoJugador1,
    setPuntosJugador2,
    setPuntosJugador1,
    triunfo,
    historialRondas,
    setHistorialRondas,
  } = useContext(GameContext);

  useEffect(() => {
    let primeraCarta = undefined;
    let cartaGano;
    if (esTurnoJugador1) {
      primeraCarta = cartaSeleccionadaJugador1;
    }
    if (primeraCarta === undefined && !esTurnoJugador1) {
      primeraCarta = cartaSeleccionadaJugador2;
    }
    if (
      cartaSeleccionadaJugador1?.valor !== undefined &&
      cartaSeleccionadaJugador2?.valor !== undefined &&
      triunfo
    ) {
      cartaGano = compararCartas(
        cartaSeleccionadaJugador1,
        cartaSeleccionadaJugador2,
        triunfo,
        primeraCarta,
        setEsTurnoJugador1,
        setPuntosJugador1,
        setPuntosJugador2
      );
      if (cartaGano) {
        setHistorialRondas((prev) => [
          ...prev,
          {
            jugador1: cartaSeleccionadaJugador1,
            jugador2: cartaSeleccionadaJugador2,
            ganadora: cartaGano || undefined,
          },
        ]);
        setCartaGanadora(cartaGano);
        setCartaSeleccionadaJugador1(undefined);
        setCartaSeleccionadaJugador2(undefined);
      }
    }
  }, [
    cartaSeleccionadaJugador1,
    cartaSeleccionadaJugador2,
    cartasJugador1,
    setCartaGanadora,
    setCartaSeleccionadaJugador1,
    setCartaSeleccionadaJugador2,
    setEsTurnoJugador1,
    esTurnoJugador1,
    setPuntosJugador2,
    setPuntosJugador1,
    setHistorialRondas,
  ]);
  
  return (
    <div className={styles.cartasJugadas}>
      <div className={styles.cartasElegidas}>
        {historialRondas.map((ronda, index) => (
          <img
            key={index}
            src={
              ronda?.jugador2.valor === null
                ? "/img/reverso.png"
                : `/img/${ronda?.jugador2.valor}-${ronda?.jugador2.palo}.png`
            }
            alt=""
            width={90}
            className={
              ronda.ganadora?.valor === ronda.jugador2.valor &&
              ronda.ganadora?.palo === ronda.jugador2.palo
                ? styles.cartaGanadora
                : styles.cartaPerdedora
            }
          />
        ))}
      </div>
      <div className={styles.cartasElegidas}>
        {historialRondas.map((ronda, index) => (
          <img
            key={index}
            src={
              ronda?.jugador1.valor === null
                ? "/img/reverso.png"
                : `/img/${ronda?.jugador1.valor}-${ronda?.jugador1.palo}.png`
            }
            alt=""
            width={90}
            className={
              ronda.ganadora?.valor === ronda.jugador1.valor &&
              ronda.ganadora?.palo === ronda.jugador1.palo
                ? styles.cartaGanadora
                : styles.cartaPerdedora
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CartasSeleccionadas;
