import { readFile, writeFile } from "node:fs/promises";
import {resolve} from "node:path";


const dbPath = resolve("data/DB.json");

export const leerDB = async () => {
    try {
        const data = await readFile(dbPath, { encoding: 'utf8' });
        return JSON.parse(data);
    } catch (error) {
        console.error("Error al leer la base de datos:", error);
        return { jugadores: [], mesas: [] }
    }
};

export const guardarDB = async (contenido) => {
    try {
        const data = JSON.stringify(contenido,null, 2);
        await writeFile(dbPath, data, "utf-8");
    } catch (error) {
        console.error("Error al guardar la base de datos:", error)
    }
}