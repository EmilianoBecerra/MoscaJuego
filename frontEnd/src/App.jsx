import { GameProvider } from "./context/GameContext";
import styles from "./App.module.css";
import { Link, Route, Routes } from "react-router-dom";
import { StrictMode, useEffect } from "react";
import Login from "./features/auth/componentes/Login";
import Home from "./features/home/componentes/Home";
import Manual from "./features/tutorial/componente/Manual";
import Register from "./features/auth/componentes/Register";

const App = () => {
  const usuario = localStorage.getItem("nombreUsuario");
  const idUsuario = localStorage.getItem("idUsuario");

  useEffect(() => {}, [usuario, idUsuario]);

  return (
    <StrictMode>
      <GameProvider>
        <div className={styles.body}>
          <header className={styles.header}>
            <Link className={styles.link} to={usuario ? "/home" : "/"}>
              <h1>Mosca</h1>
            </Link>
            <Link className={styles.link} target="_blank" to={"/manual"}>
              Manual
            </Link>
          </header>
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={usuario ? <Home /> : <Login />} />
             {/*  <Route path="/manual" element={<Manual />} />
              <Route path="/home" element={<Home />} />*/}
              <Route path="/registrarse" element={<Register />} /> 
            </Routes>
          </main>
          <footer className={styles.footer}>
            <p>Desarrollado por Emiliano Becerra :)</p>
          </footer>
        </div>
      </GameProvider>
    </StrictMode>
  );
};

export default App;
