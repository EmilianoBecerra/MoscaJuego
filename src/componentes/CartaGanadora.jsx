import { useContext, useEffect } from "react";
import { GameContext } from "../GameContext";

const CartaGanadora = () => {
  const {
    cartaSeleccionadaJugador1,
    setCartaSeleccionadaJugador1,
    setCartaSeleccionadaJugador2,
    cartaSeleccionadaJugador2,
    triunfo,
  } = useContext(GameContext);

  let cartaGanadora = null;
  const JERARQUIA = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function valorJerarquico(valor) {
    return JERARQUIA.indexOf(valor);
  }

  function compararCartas(carta1, carta2, paloTriunfo) {
    cartaGanadora = null;
    const esTriunfo1 = carta1?.palo === paloTriunfo;
    const esTriunfo2 = carta2?.palo === paloTriunfo;

    if (esTriunfo1 && !esTriunfo2) return carta1;
    if (!esTriunfo1 && esTriunfo2) return carta2;
    if (carta1?.palo === carta2?.palo) {
      const jerarquia1 = valorJerarquico(carta1?.valor);
      const jerarquia2 = valorJerarquico(carta2?.valor);
      if (jerarquia1 > jerarquia2) return carta1;
      if (jerarquia2 > jerarquia1) return carta2;
      return null;
    } else {
      const jerarquia1 = valorJerarquico(carta1?.valor);
      const jerarquia2 = valorJerarquico(carta2?.valor);
      if (jerarquia1 < jerarquia2) return carta1;
      if (jerarquia2 < jerarquia1) return carta2;
    }
    return null;
  }

  if (
    cartaSeleccionadaJugador1.valor !== undefined &&
    cartaSeleccionadaJugador2.valor !== undefined &&
    cartaGanadora === null
  ) {
    cartaGanadora = compararCartas(
      cartaSeleccionadaJugador1,
      cartaSeleccionadaJugador2,
      triunfo
    );
  }
  return (
    <img
      src={
        cartaGanadora !== null
          ? `/img/${cartaGanadora?.valor}-${cartaGanadora?.palo}.png`
          : "/img/reverso.png"
      }
      alt=""
      width={90}
    />
  );
};

export default CartaGanadora;
