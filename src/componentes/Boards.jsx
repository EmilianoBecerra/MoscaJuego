import React, { useEffect, useRef, useState } from "react";
import styles from "./Boards.module.css";
import Card from "./Cartas";
import mazo from "../utils/mazo";
import Boton from "./Boton";
import CartasElegidas from "./CarrtasElegidas";

const Board = ({ setTriunfo }) => {
  const [cartasJugador1, setCartasJugador1] = useState(Array(5).fill(null));
  const [cartasJugador2, setCartasJugador2] = useState(Array(5).fill(null));
  const [descarte, setDescarte] = useState(false);
  const [indice, setIndice] = useState(null);
  const [indice2, setIndice2] = useState(null);
  const [noBoton, setNoBoton] = useState(false);
  const [indiceCartaElegida, setIndiceCartaElegida] = useState(null);
  const [cartaElegida, setcartaElegida] = useState({});
  const mazoRef = useRef([...mazo]);
  useEffect(() => {
    const actualizarCartasJugador1 = (i) => {
      setCartasJugador1((prevItems) => {
        const copia = [...prevItems];
        copia[i] = { valor: undefined, palo: undefined };
        return copia;
      });
    };
    const actualizarCartasJugador2 = (i2) => {
      setCartasJugador2((prevItems) => {
        const copia = [...prevItems];
        copia[i2] = { valor: undefined, palo: undefined };
        return copia;
      });
    };
    actualizarCartasJugador1(indice);
    actualizarCartasJugador2(indice2);
  }, [indice, indice2]);

  function repartirCartas() {
    if (!descarte) {
      const cartasMazo = mazoRef.current;
      const jugador1Cartas = [];
      const jugador2Cartas = [];
      for (let i = 0; i < 10; i++) {
        let nCarta = Math.floor(Math.random() * cartasMazo.length + 0);
        const carta = cartasMazo.splice(nCarta, 1)[0];
        if (i % 2 === 0) {
          jugador2Cartas.push(carta);
        } else {
          jugador1Cartas.push(carta);
        }
      }
      setCartasJugador1(jugador1Cartas);
      setCartasJugador2(jugador2Cartas);
      setTriunfo(jugador1Cartas[4]);
      setDescarte(true);
    }
  }

  function descartarCartas() {
    if (descarte) {
      const cartasMazo = mazoRef.current;
      const jugador1Cartas = [];
      const jugador2Cartas = [];

      cartasJugador1.map((carta) => {
        if (carta.valor === undefined) {
          let nCarta = Math.floor(Math.random() * cartasMazo.length + 0);
          const nuevaCarta = cartasMazo.splice(nCarta, 1)[0];
          jugador1Cartas.push(nuevaCarta);
        } else {
          jugador1Cartas.push(carta);
        }
      });
      setCartasJugador1(jugador1Cartas);
      cartasJugador2.map((carta) => {
        if (carta.valor === undefined) {
          let nCarta = Math.floor(Math.random() * cartasMazo.length + 0);
          const nuevaCarta = cartasMazo.splice(nCarta, 1)[0];
          jugador2Cartas.push(nuevaCarta);
        } else {
          jugador2Cartas.push(carta);
        }
      });
      setCartasJugador2(jugador2Cartas);
    }
    setNoBoton(true);
  }

  function elegirCarta() {
    console.log(indiceCartaElegida);
    console.log(cartasJugador1[indiceCartaElegida])
    setcartaElegida(cartasJugador1[indiceCartaElegida]);
  }

  return (
    <section
      className={noBoton ? styles.cartasJugadoresRepartidas : styles.board}
    >
      <div className={styles.cartasJugadores}>
        {cartasJugador1?.map((carta, index) => (
          <Card
            key={index}
            valor={carta?.valor}
            palo={carta?.palo}
            index={index}
            setIndice={!noBoton ? setIndice : null}
            noBoton={noBoton}
            setIndiceCartaElegida={setIndiceCartaElegida}
            elegirCarta={elegirCarta}
          />
        ))}
      </div>
      {noBoton ? (
        <CartasElegidas cartaElegida={cartaElegida} />
      ) : (
        <Boton
          noBoton={noBoton}
          descarte={descarte}
          repartirCartas={repartirCartas}
          descartarCartas={descartarCartas}
        />
      )}

      <div className={styles.cartasJugadores}>
        {cartasJugador2?.map((carta, index) => (
          <Card
            key={index}
            valor={carta?.valor}
            palo={carta?.palo}
            index={index}
            setIndice={!noBoton ? setIndice2 : null}
            noBoton={noBoton}
            setIndiceCartaElegida={setIndiceCartaElegida}
            elegirCarta={elegirCarta}
          />
        ))}
      </div>
    </section>
  );
};

export default Board;
