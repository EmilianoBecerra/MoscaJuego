import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../context/GameContext";
import { obtenerUsuario } from "../servicios/usuarios";

export const useLogin = () => {
    const { setUsuarios } = useContext(GameContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ usuario: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { usuario, password } = formData;
        const lsUsuario = localStorage.getItem("usuario");
        const lsPassword = localStorage.getItem("idUsuario");
        if (usuario && password && !lsUsuario && !lsPassword) {
            const traerUsuario = await obtenerUsuario(usuario, password);

            if (traerUsuario?.error === "Contraseña incorrecta") {
                setError(traerUsuario?.error);
                return;
            }

            if (traerUsuario?.error == "No existe usuario") {
                setError(traerUsuario.error);
                return;
            }

            if (traerUsuario) {
                setUsuarios(traerUsuario);
                localStorage.setItem("usuario", traerUsuario.usuario);
                localStorage.setItem("idUsuario", traerUsuario.id);
            }
        }
        if (lsUsuario && lsPassword) {
            navigate("/home");
        }
        //verificar esto
    }

    const handleClickRegister = (e) => {
        navigate("/registrarse");
    };

    return {
        formData,
        error,
        handleChange,
        handleLogin,
        handleClickRegister
    }
}