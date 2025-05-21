import express from "express";

import {
    crearUsuario,
    obtenerUsuario,
} from "../controllers/usuarioController.js";


const router = express.Router();

router.post("/obtenerUsuario", obtenerUsuario);
router.post("/", crearUsuario);


export default router;