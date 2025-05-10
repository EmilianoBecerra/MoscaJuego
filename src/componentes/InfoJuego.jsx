import { useContext } from "react";
import { GameContext } from "../GameContext";

const InfoJuego = () => {
    const { triunfo } = useContext(GameContext);
  return (
    <div>
      <h2>
        Carta de triunfo: {triunfo.valor} de {triunfo.palo}
      </h2>
    </div>
  );
};

export default InfoJuego;
