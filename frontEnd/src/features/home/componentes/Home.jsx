import styles from "../Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.infoJugador}>
        <span>Nombre Usuario : </span>
        <span>Estado:</span>
        <span>Puntos Ranking: </span>
      </div>
      <div className={styles.sala}></div>
    </div>
  );
};

export default Home;
