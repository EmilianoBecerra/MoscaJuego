import { leerDB } from "../utils/db.js"


export const obtenerPartida = (req, res) => {
    try{
        const db = leerDB();
        const { partidaId } = req.query;
    
        const partida = db.partidas.find(p => p.id === partidaId);
        if(!partida) res.status(400).json({error: "No existe partida"});
    
        res.status(200).json(partida);
    } catch(error){
        console.error("Error al obtener una mesa", error);
        res.status(400).json({error: "Error al obtener la partida"});
    }
}