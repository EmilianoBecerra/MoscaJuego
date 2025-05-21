import styles from "../Manual.module.css";

const Manual = () => {
  return (
    <div className={styles.Manual}>
      <div className={styles.header}>
        <h1>🕹️Cómo se juega a La Mosca</h1>
        <img
          src="/img/maradona-a-jugar.gif"
          alt="gif maradona a jugar"
          width={200}
          height={100}
        />
      </div>
      <section className={styles.explicacion}>
        <article className={styles.baraja}>
          <h3>📌Baraja</h3>
          <p>
            La Mosca se juega con la baraja española, que consta de{" "}
            <strong>48 cartas</strong>, divididas en:
          </p>
          <ul>
            <li>
              Cuatro palos: <strong>Basto</strong>, <strong>Espada</strong>,{" "}
              <strong>Oro</strong> y <strong>Copa</strong>.
            </li>
            <li>
              Doce valores numéricos: del <strong>1 al 12</strong>.
            </li>
          </ul>
          <p>📝 Cada carta tiene un palo y un valor numérico.</p>
        </article>

        <article className={styles.valores}>
          <h3>📌Valores</h3>
          <p>
            Los valores de las cartas no siguen un orden totalmente lineal. Se
            parecen más al Truco . El orden de valor es:
          </p>
          <ul>
            <li>
              <strong>1</strong>: Es la carta de mayor valor, le gana a todas.
            </li>
            <li>
              <strong>3</strong>: Le gana a todas, menos al <strong>1</strong>.
            </li>
            <li>
              <strong>2, 4, 5, 6, 7, 8, 9, 10, 11, 12</strong>: siguen un orden
              ascendente donde el 2 es el menor y el 12 el mayor.
            </li>
          </ul>
          <p>
            📝 Importante: No sólo importa el valor, sino también, importa el
            palo de las cartas.
          </p>
        </article>

        <article className={styles.triunfo}>
          <h3>🃏Triunfo</h3>
          <p>
            La última carta repartida se da vuelta. El{" "}
            <strong> palo de esa carta se llama "triunfo"</strong> y es el palo
            con mayor valor.
          </p>
        </article>

        <article className={styles.puntuacion}>
          <h3>🧮Puntuación</h3>
          <p>
            Todos los jugadores comienzan con <strong>15 puntos</strong>. Cada
            vez que ganan una ronda, <strong>pierden 1 punto</strong>.
          </p>
          <p>
            El primer jugador en llegar a{" "}
            <strong>0 puntos gana la partida</strong>.
          </p>
          <p>
            ⚠️Si un jugador <strong>no gana ninguna ronda</strong>, se le suman{" "}
            <strong>5 puntos</strong> como castigo.
          </p>
          <p>
            Cuando finaliza la quinta ronda se mezclan de nuevo todas las cartas
            y se reparten 5 nuevas cartas para cada jugador.
          </p>
        </article>
        
        <article className={styles.reglas}>
          <h3>Reglas</h3>
          <ul>
            <li>
              <strong>El triunfo gana a cualquier otro palo</strong>.
            </li>
            <li>
              Si hay más de un triunfo,{" "}
              <strong>gana el de mayor valor numérico</strong>.
            </li>
            <li>
              Si nadie tira triunfo ni una carta con el mismo palo de la primera
              que se tiró, <strong>gana quien tiró la primer carta</strong>.
            </li>
            <li>
              Si el palo de la primera carta se repite,{" "}
              <strong>gana el de mayor valor</strong>.
            </li>
            <li>
              Si tenes en tu mano más de una carta del mismo palo que la carta que
              comenzó la ronda, estás obligado a matar.
            </li>
            <li>
              Si no matas
            </li>
            <li>
              📝 Ejemplo: Si se tira <strong>Espada</strong> primero, y nadie
              tira triunfo ni otra Espada, entonces esa Espada gana, sin
              importar los valores de las demás cartas.
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Manual;
