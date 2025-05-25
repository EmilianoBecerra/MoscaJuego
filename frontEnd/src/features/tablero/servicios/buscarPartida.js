import axios from 'axios';



export const traerPartida = async (partidaId) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/partida/?partidaId=${partidaId}`);
        return response.data;
    } catch(error) {
        console.error('Error al obtener partida', error);
    }
 
}