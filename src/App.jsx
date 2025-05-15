import Board from "./componentes/Boards";
import Jugadores from "./componentes/Jugadores";
import { GameContext, GameProvider } from "./GameContext";
import styles from "./App.module.css";
import InfoJuego from "./componentes/InfoJuego";
import { Link, Route, Routes } from "react-router";
import Manual from "./componentes/Manual";
import NuevaRonda from "./componentes/NuevaRonda";

const App = () => {
  return (
    <GameProvider>
      <div className={styles.body}>
        <header className={styles.header}>
          <h1>LaMosca</h1>
          <Link className={styles.buttonManual} target="_blank" to={"/manual"}>
            Manual
          </Link>
        </header>

        <main className={styles.main}>
          <div className={styles.informacionJuego}>
            <Jugadores jugador={"Jugador 1"} />
            <InfoJuego />
            <Jugadores jugador={"Jugador 2"} />
          </div>
          <NuevaRonda />
          <Board />
        </main>

        <footer className={styles.footer}>
          <p>Desarrollado por Emiliano Becerra :)</p>
        </footer>
      </div>
    </GameProvider>
  );
};

export default App;
