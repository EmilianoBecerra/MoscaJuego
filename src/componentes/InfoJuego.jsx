import { useContext } from "react";
import { GameContext } from "../GameContext";

const InfoJuego = () => {
    const { triunfo } = useContext(GameContext);
  return (
    <div>
      <h2>
        Palo triunfo: {triunfo.palo}
      </h2>
    </div>
  );
};

export default InfoJuego;
