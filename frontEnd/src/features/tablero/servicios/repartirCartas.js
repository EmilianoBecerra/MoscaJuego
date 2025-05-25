import axios from 'axios';


export const repartirCartas = async ({ usuarioId, mesaId, partidaId }) => {
    try {
        const response = await axios.post('http://localhost:3000/api/partida/ingresarPartida',
            {
                usuarioId, mesaId, partidaId
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        return response.data;
    } catch (error) {
        console.error("Error al repartir las cartas", error);
    }
}

