import Mesa from "../../mesa/componentes/Mesa";
import styles from "../Home.module.css";
import { useHome } from "../hooks/useHome";

const Home = () => {
  const { jugador, mesasCreadas, nombreJugador } = useHome();

  return (
    <div className={styles.home}>
      <div className={styles.infoJugador}>
        <span>Nombre Usuario : {nombreJugador?.toUpperCase()}</span>
        <span>Estado: {jugador?.online ? "Conectado" : "Desconectado"}</span>
        <span>Puntos Ranking: {jugador?.puntosglobales}</span>
      </div>
      <div className={styles.sala}>
        {mesasCreadas?.length === 0
          ? "No hay mesas creadas"
          : mesasCreadas.map((m) => (
              <Mesa key={m.id} numeroMesa={m.numeroDeMesa} mesaId={m.id} />
            ))}
      </div>
    </div>
  );
};

export default Home;
