import axios from 'axios';

export const registrarUsuario = async (nombreUsuario, correo, password) => {
    try {
        const response = await axios.post('http://localhost:3000/api/usuarios/registrarse',
            {
                nombreUsuario,
                correo,
                password
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
        return response.data;
    } catch(error) {
        console.error('Error al registrar usuario frontend => registrarUsuario', error);
        return error;
    }
   
}