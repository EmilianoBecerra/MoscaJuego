import { createContext, useState, useRef } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState(null);
  const [jugador, setJugador] = useState(null);
  const [mesasCreadas, setMesasCreadas] = useState([]);
  const [mesa, setMesa] = useState(null);
  const [partida, setPartida] = useState(null);
  const [cartas, setCartas] = useState([]);

  return (
    <GameContext.Provider
      value={{
        usuarios,
        setUsuarios,
        mesasCreadas,
        setMesasCreadas,
        jugador, setJugador,
        partida, setPartida,
        cartas, setCartas,
        mesa, setMesa
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
