import axios from 'axios';

export const obtenerMesas = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/mesas/');
        return response.data;
    } catch (error) {
        console.error('Error al obtener mesas');
        return null;
    }
}