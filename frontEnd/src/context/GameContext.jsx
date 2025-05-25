import { createContext, useState, useRef } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState(null);
  const [jugador, setJugador] = useState(null);
  const [mesasCreadas, setMesasCreadas] = useState([]);

  return (
    <GameContext.Provider
      value={{
        usuarios,
        setUsuarios,
        mesasCreadas,
        setMesasCreadas,
        jugador, setJugador
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
