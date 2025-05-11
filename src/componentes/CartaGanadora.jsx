import { useContext, useEffect } from "react";

const CartaGanadora = ({
  cartaGanadora,
  cartasJugador1,
  setCartaSeleccionadaJugador1,
  setCartaSeleccionadaJugador2,
  esTurnoJugador1,
  setEsTurnoJugador1,
  cartaSeleccionadaJugador1,
  setCartaGanadora,
  cartaSeleccionadaJugador2,
  setPuntosJugador1,
  setPuntosJugador2,
  triunfo,
}) => {
  const JERARQUIA = [1, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 2];
  function valorJerarquico(valor) {
    return JERARQUIA.indexOf(valor);
  }

  function compararCartas(carta1, carta2, triunfo, primeraCarta) {
    if (carta1.valor !== undefined && carta2.valor !== undefined) {
      const esTriunfo1 = carta1?.palo === triunfo?.palo;
      const esTriunfo2 = carta2?.palo === triunfo?.palo;

      if (esTriunfo1 && !esTriunfo2) {
        setEsTurnoJugador1(true);
        setPuntosJugador1((prev) => --prev);
        return carta1;
      }
      if (!esTriunfo1 && esTriunfo2) {
        setEsTurnoJugador1(false);
        setPuntosJugador2((prev) => --prev);
        return carta2;
      }

      if (esTriunfo1 && esTriunfo2) {
        const jerarquia1 = valorJerarquico(carta1?.valor);
        const jerarquia2 = valorJerarquico(carta2?.valor);
        if (jerarquia1 < jerarquia2) {
          setEsTurnoJugador1(true);
          setPuntosJugador1((prev) => --prev);
          return carta1;
        }
        if (jerarquia1 > jerarquia2) {
          setEsTurnoJugador1(false);
          setPuntosJugador2((prev) => --prev);
          return carta2;
        }
      } else {
        const esPrimeraCarta1 = carta1?.palo === primeraCarta?.palo;
        const esPrimeraCarta2 = carta2?.palo === primeraCarta?.palo;

        if (esPrimeraCarta1 && !esPrimeraCarta2) {
          setEsTurnoJugador1(true);
          setPuntosJugador1((prev) => --prev);
          return carta1;
        }
        if (!esPrimeraCarta1 && esPrimeraCarta2) {
          setEsTurnoJugador1(false);
          setPuntosJugador2((prev) => --prev);
          return carta2;
        }
        if (carta1?.palo === carta2?.palo) {
          const jerarquia1 = valorJerarquico(carta1?.valor);
          const jerarquia2 = valorJerarquico(carta2?.valor);
          if (jerarquia1 < jerarquia2) {
            setEsTurnoJugador1(true);
            setPuntosJugador1((prev) => --prev);
            return carta1;
          }
          if (jerarquia1 > jerarquia2) {
            setEsTurnoJugador1(false);
            setPuntosJugador2((prev) => --prev);
            return carta2;
          }
        }
      }
    }
    return undefined;
  }

  useEffect(() => {
    const primeraCarta = cartasJugador1[0];

    if (
      cartaSeleccionadaJugador1?.valor !== undefined &&
      cartaSeleccionadaJugador2?.valor !== undefined &&
      triunfo
    ) {
      const cartaGano = compararCartas(
        cartaSeleccionadaJugador1,
        cartaSeleccionadaJugador2,
        triunfo,
        primeraCarta
      );

      if (cartaGano) {
        setCartaGanadora(cartaGano);
        setCartaSeleccionadaJugador1(undefined);
        setCartaSeleccionadaJugador2(undefined);
      }
    }
  }, [
    cartaSeleccionadaJugador1,
    cartaSeleccionadaJugador2,
    cartasJugador1,
    setCartaGanadora,
    setCartaSeleccionadaJugador1,
    setCartaSeleccionadaJugador2,
    setEsTurnoJugador1,
  ]);

  return (
    <img
      src={
        cartaGanadora !== undefined
          ? `/img/${cartaGanadora?.valor}-${cartaGanadora?.palo}.png`
          : "/img/reverso.png"
      }
      alt=""
      width={90}
    />
  );
};

export default CartaGanadora;
