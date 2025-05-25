import { useContext, useEffect, useState } from 'react'
import { GameContext } from '../../../context/GameContext'
import { traerPartida } from '../servicios/buscarPartida';

export const useTablero = () => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { partida, setPartida } = useContext(GameContext);
    const partidaId = localStorage.getItem('partidaId');
    useEffect(() => {
        const obtenerPartida = async () => {
            if (!partida) {
                try {
                    const actualizarPartida = await traerPartida(partidaId);
                    setPartida(actualizarPartida);
                } catch (error) {
                    setError(true);
                    console.error('Error al traer la partida', error)
                } finally {
                    setIsLoading(false);
                }
            }
        }
        obtenerPartida();

    }, [partida, isLoading, error])
    return { error, isLoading }
}