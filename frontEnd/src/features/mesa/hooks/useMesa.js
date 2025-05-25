import { useNavigate } from "react-router-dom";
import { ingresarMesa } from "../servicios/ingresarMesa.js";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext.jsx";




export const useMesa = (mesaId) => {
    const {setMesa} = useContext(GameContext);
    const usuarioId = localStorage.getItem("idUsuario");
    const navigate = useNavigate();
    const lsPartida = localStorage.getItem("partidaId");
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await ingresarMesa(usuarioId, mesaId);
            setMesa(response);
            console.log(response);
            if (response) {
                navigate(`/mesa/${mesaId}`);
            }
        } catch (error) {
            alert("Error al ingresar a la mesa");
        }
    };

    return {
        usuarioId,
        handleClick
    }
}