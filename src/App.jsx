import Board from "./componentes/Boards"
import styles from "./App.module.css";
import { Fragment, useState } from "react";
import Player from "./componentes/Jugadores";
import mazo from "./utils/mazo";

const App = () => {
  const [triunfo, setTriunfo] = useState({});
  return (
    <main >
      <Player triunfo={triunfo}/>
      <Board setTriunfo={setTriunfo}/>
    </main>
  )
}


export default App;
