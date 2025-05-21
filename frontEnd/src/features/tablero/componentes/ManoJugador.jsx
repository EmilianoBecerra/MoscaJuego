import styles from "../ManoJugador.module.css";

const ManoJugador = () => {
  const ingresarPartida = false;
  return (
    <div className={styles.manoJugador}>
      {ingresarPartida ? (
        <div className={styles.cartas}>
          {cartas?.map((carta, index) => (
            <img
              key={index}
              src={`/img/${carta.valor}-${carta.palo}.png`}
              alt={`Carta ${carta.valor} de ${carta.palo}`}
              onClick={() => toggleSeleccion(carta)}
              width={85}
            />
          ))}
          <button
            onClick={descartarCartas}
            disabled={seleccionadas.length === 0}
          >
            {" "}
            Descartar cartas{" "}
          </button>
        </div>
      ) : (
        <div>
          <button style={{ color: "red" }}>Ingresar Partida</button>
        </div>
      )}
    </div>
  );
};

export default ManoJugador;
