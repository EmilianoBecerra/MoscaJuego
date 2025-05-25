import axios from 'axios';

export const descartarCartas = async (usuarioId, partidaId, cartas) => {
    try {
        const response = await axios.post('http://localhost:3000/api/partida/descartarCartas',
            {
                usuarioId,
                partidaId,
                cartas
            },
            { headers: { 'Content-Type': 'application/json' }, }
        )
        return response.data;
    } catch (error) {
        console.error('Error al descartar cartas', error);
    }
}   