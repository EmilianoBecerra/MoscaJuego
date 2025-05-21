import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearUSuario } from "../servicios/usuarios";


export const useRegister = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        usuario: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await crearUSuario(formData);
        navigate('/');
    };

    return {
        formData,
        handleSubmit,
        handleChange
    }
}
