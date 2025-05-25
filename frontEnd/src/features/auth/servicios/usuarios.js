import axios from 'axios';

export const obtenerUsuario = async (usuario, password) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/usuarios/obtenerUsuario`, {
            usuario,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );
        return response?.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        }
        console.error('Error al obtener el usuario:', error);
        return null;
    }
}


export const crearUsuario = async (formData) => {
    try {
        const response = await axios.post(
            'http://localhost:3000/api/usuarios/',
            formData
            , {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('Respuesta del backend', response.data);
    } catch (error) {
        console.error(
            'Error al enviar el formulario:',
            error.response?.data || error.message
        );
    }
}