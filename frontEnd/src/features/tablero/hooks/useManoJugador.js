import { useContext, useState } from 'react'
import { repartirCartas } from '../servicios/repartirCartas.js';
import { GameContext } from '../../../context/GameContext.jsx';
import { descartarCartas } from '../servicios/descartarCartas.js';
import { obtenerJugador } from '../servicios/obtenerJugador.js';


export const useManoJugador = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const { cartas, setCartas } = useContext(GameContext);
    const [cartasSeleccionadas, setCartasSeleccionadas] = useState([]);
    const usuarioId = localStorage.getItem('idUsuario');
    const partidaId = localStorage.getItem('partidaId');




    const handleClick = async () => {
        try {
            const lsIdUsuario = localStorage.getItem("idUsuario");
            const jugador = await obtenerJugador(lsIdUsuario);
            console.log(jugador);
            const { mesaId } = jugador;
        } catch (error) {
            console.log('Error al setear las cartas');
            setIsError(true);
        } finally {

            setIsLoading(false);
        }
    }

    const seleccionarCartas = (id) => {
        setCartasSeleccionadas((prev) =>
            prev.includes(id)
                ? prev.filter((cartaId) => cartaId !== id)
                : [...prev, id]
        )
    }

    const enviarCartasDescartadas = async () => {
        try {
            const nuevasCartas = await descartarCartas(usuarioId, partidaId, cartasSeleccionadas);
            setCartas(nuevasCartas);
            setCartasSeleccionadas([]);
        } catch (error) {
            console.error("No se pudo enviar las cartas seleccionadas", error);
        }
    }

    return { handleClick, seleccionarCartas, cartasSeleccionadas, enviarCartasDescartadas, isLoading, isError }
}
