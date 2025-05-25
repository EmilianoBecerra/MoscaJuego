/* import { useContext, useState } from "react";
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

        const lsUsuario = localStorage.getItem("idUsuario");
        const lsNombreUsuario = localStorage.getItem("nombreUsuario");

        if (usuario && password && !lsUsuario) {
            const traerUsuario = await obtenerUsuario(usuario, password);

            if (traerUsuario?.error === "Contraseña incorrecta") {
                setError(traerUsuario?.error);
                return;
            }

            if (traerUsuario?.error === "No existe usuario") {
                setError(traerUsuario.error);
                return;
            }

            if (traerUsuario) {
                setUsuarios(traerUsuario);
                localStorage.setItem("idUsuario", traerUsuario.id);
                localStorage.setItem("nombreUsuario", traerUsuario.usuario);
            }
        }
        if (lsUsuario) {
            navigate("/home");
        }
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
} */