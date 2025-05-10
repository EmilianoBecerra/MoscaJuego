import Board from "./componentes/Boards";
import Jugadores from "./componentes/Jugadores";
import { GameProvider } from "./GameContext";
import styles from "./App.module.css";
import InfoJuego from "./componentes/InfoJuego";

const App = () => {
  return (
    <GameProvider>
      <main className={styles.main}>
        <InfoJuego/>
        <div className={styles.tablero}>
          <Jugadores jugador={"Jugador 1"}/>
          <Board />
          <Jugadores jugador={"Jugador 2"} />
        </div>
      </main>
    </GameProvider>
  );
};

export default App;
