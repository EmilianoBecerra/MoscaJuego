import { useContext, useEffect } from 'react';
import { GameContext } from '../../../context/GameContext';
import { obtenerJugador } from '../servicios/obtenerJugador';
import { obtenerMesas } from '../servicios/obtenerMesas';
import { useNavigate } from 'react-router-dom';

export const useHome = () => {
    const { setMesasCreadas, mesasCreadas, jugador, setJugador } =
        useContext(GameContext);
    const navegate = useNavigate();
    const idUsuario = localStorage.getItem('idUsuario');
    const usuario = localStorage.getItem('nombreUsuario');
    useEffect(() => {
        if (!idUsuario) navegate('/');

        const jugadorConectado = async () => {
            try {
                const mesas = await obtenerMesas();
                const jugadorConectado = await obtenerJugador(idUsuario);
                setJugador(jugadorConectado);
                setMesasCreadas(mesas);
            }
            catch (error) {
                console.error('Error al obtener jugador y mesas');
            }

        };
        jugadorConectado();

    }, []);

    const nombreJugador = jugador?.nombreJugador;

    return { mesasCreadas, jugador, idUsuario, usuario, nombreJugador }
}