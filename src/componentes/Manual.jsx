import { Link } from "react-router";
import styles from "./Manual.module.css";

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
      <h2>🎴Baraja y Valores</h2>
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
            <p>Cada carta tiene un palo y un valor numérico.</p>
          </article>

          <article className={styles.valores}>
            <h3>📌Valores</h3>
            <p>
              Los valores de las cartas no siguen un orden totalmente lineal. Se
              parecen más al Truco . El orden de poder es:
            </p>
            <ul>
              <li>
                <strong>1</strong>: la carta más poderosa, le gana a todas.
              </li>
              <li>
                <strong>3</strong>: le gana a todas, menos al 1.
              </li>
              <li>
                <strong>2, 4, 5, 6, 7, 8, 9, 10, 11, 12</strong>: siguen un
                orden ascendente donde el 2 es el menor y el 12 el mayor.
              </li>
            </ul>
            <p>
              📝 Importante: No solo importa el número, también importa el palo.
            </p>
          </article>

          <article className={styles.triunfo}>
            <h3>🃏Triunfo</h3>
            <p>
              La última carta repartida se da vuelta y se muestra a todos. El{" "}
              <strong>palo de esa carta se llama "triunfo"</strong> y es el de
              mayor valor.
            </p>
            <ul>
              <h3>⚔️ Comparación de cartas</h3>
              <li>El triunfo gana a cualquier otro palo.</li>
              <li>Si hay más de un triunfo, gana el de mayor valor.</li>

              <li>
                Si nadie tira triunfo, gana quien tiró primero, si su palo se
                repite, gana el de mayor valor.
              </li>
              <li>
                Ejemplo: Si se tira <strong>Espada</strong> primero, y nadie
                tira triunfo ni otra Espada, entonces esa Espada gana, sin
                importar los valores.
              </li>
            </ul>
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
              ⚠️Si un jugador <strong>no gana ninguna ronda</strong>, se le
              suman <strong>5 puntos</strong> como castigo.
            </p>
          </article>
          <article className={styles.reglas}>
            <h3>Reglas</h3>
            <ul>
              <li>
                Las cartas siguientes a la primera carta que se tira deben ser del mismo palo que la primera si en tu mano hay una de ese palo
              </li>
              <li>
                Si no tenes cartas del mismo palo a la primera, tenes que tirar una que sea el triunfo
              </li>
              <li>
                Si tampoco tenes triunfo, se tira cualquiera pero automaticamente perdes la ronda.
              </li>
            </ul>
          </article>
      </section>
    </div>
  );
};

export default Manual;
