import React from "react";
import styles from "./Player.module.css"

const Player = ({ triunfo }) => {
  const jugadores = [
    { nombre: "Jugador 1", cartas: [], puntos: 15 },
    { nombre: "Jugador 2", cartas: [], puntos: 15 },
  ]
  return (
    <section>
      <div className={styles.infoJugador}>
        <p>{jugadores[0].nombre}</p>
        <p>Puntos: {jugadores[0].puntos}</p>
      </div>
      <div>
        <img src={triunfo ? `/img/${triunfo.valor}-${triunfo.palo}.png` : ""} alt="carta triunfo" />
      </div>
      <div className={styles.infoJugador}>
        <p>{jugadores[1].nombre}</p>
        <p>Puntos: {jugadores[1].puntos}</p>
      </div>
    </section>
  );
};

export default Player;
