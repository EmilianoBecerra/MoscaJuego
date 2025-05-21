import { useContext, useEffect } from "react";
import { GameContext } from "../../../context/GameContext";
import { obtenerJugador } from "../servicios/obtenerJugador";
import { obtenerMesas } from "../servicios/obtenerMesas";
import { useNavigate } from "react-router-dom";

export const useHome = () => {
    const { setMesasCreadas, mesasCreadas, jugador, setJugador } =
        useContext(GameContext);
    const navegate = useNavigate();
    const idUsuario = localStorage.getItem("idUsuario");
    const usuario = localStorage.getItem("usuario");

    useEffect(() => {
        if (!jugador) navegate("/");

        const jugadorConectado = async () => {
            const jugadorConectado = await obtenerJugador(idUsuario);
            setJugador(jugadorConectado);
        };
        jugadorConectado();

        const mesas = async () => {
            const mesas = await obtenerMesas();
            setMesasCreadas(mesas);
        };
        mesas();
    }, []);

    const nombreJugador = jugador?.nombreJugador;

    return { mesasCreadas, jugador, idUsuario, usuario, nombreJugador }
}