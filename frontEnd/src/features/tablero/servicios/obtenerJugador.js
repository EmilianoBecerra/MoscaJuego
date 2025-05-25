import axios from 'axios';


export const obtenerJugador = async (idUsuario) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/jugadores/?idUsuario=${idUsuario}`);
        return response.data;
    } catch (error) {
        console.error('No se pudo conseguir el jugador');
    }
}