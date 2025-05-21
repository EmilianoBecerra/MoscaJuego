import { useContext, useEffect } from "react"
import { GameContext } from "../../../context/GameContext"



export const useTablero = () => {
    const { partida } = useContext(GameContext);
    useEffect(() => {
        console.log(partida);
    }, [])

    return { partida };
}