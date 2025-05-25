import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrarUsuario } from "../servicios/usuarios";


export const useRegister = () => {
    const navegate = useNavigate();
    const [formData, setFormData] = useState({
        usuario: '',
        correo: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({});
    const [respuesta, setRespuesta] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const nombreUsuario = formData.usuario;
        const correo = formData.correo;
        const password = formData.password;
        console.log(nombreUsuario, correo, password);
        try {
            setIsLoading(true);
            const response = await registrarUsuario(nombreUsuario, correo, password);
            setRespuesta(response);
            if (response.mensaje === 'Usuario creado con éxito') {
                setTimeout(() => {
                    navegate('/');
                }, 2000);
            }
        } catch (error) {
            console.error('Error al registrar usuario frontEnd', error);
            setIsError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        handleSubmit,
        respuesta,
        handleChange,
        isLoading,
        isError
    }
}
