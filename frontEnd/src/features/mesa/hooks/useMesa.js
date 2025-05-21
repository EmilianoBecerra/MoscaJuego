import { useNavigate } from "react-router-dom";
import { ingresarMesa } from "../servicios/ingresarMesa.js";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext.jsx";




export const useMesa = (mesaId) => {
    const usuarioId = localStorage.getItem("idUsuario");
    const navigate = useNavigate();
    const { setPartida } = useContext(GameContext);
    const lsPartida = localStorage.getItem("partidaId");

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await ingresarMesa(usuarioId, mesaId);
            setPartida(response.data);
            if (!lsPartida) {
                localStorage.setItem("partidaId", response.data.partidaId);
            }
            if(lsPartida !== response.data.partidaId) {
                localStorage.setItem("partidaId", response.data.partidaId);    
            }
            if (response.data) {
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