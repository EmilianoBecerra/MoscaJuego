import axios from 'axios';

export const ingresarMesa = async (idUsuario, idMesa) => {
    try {

        const response = await axios.post('http://localhost:3000/api/mesas/ingresarMesa',
            {
                idUsuario,
                idMesa
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Error del servidor:', error.response?.data);
        } else {
            console.error('Error desconocido:', error);
        }
        return null;
    }
}