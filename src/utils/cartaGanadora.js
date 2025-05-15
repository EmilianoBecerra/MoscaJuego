import React,{ useContext } from "react";
import { GameContext } from "../GameContext";

export default function compararCartas(carta1, carta2, triunfo, primeraCarta, setEsTurnoJugador1, setPuntosJugador1,
        setPuntosJugador2) {
    const JERARQUIA = [1, 3, 12, 11, 10, 9, 8, 7, 6, 5, 4, 2];

    function valorJerarquico(valor) {
        return JERARQUIA.indexOf(valor);
    }

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
};