import { v4 as uuid } from 'uuid';
import bcrypt from "bcryptjs";

export function crearUsuario(nombreUsuario, password, correo) {
    const id = uuid();
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    
    const nuevoUsuario = {
        id,
        nombreUsuario,
        passwordHash,
        correo
    }

    return nuevoUsuario;
}