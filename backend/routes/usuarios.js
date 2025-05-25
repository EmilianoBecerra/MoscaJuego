import express from "express";
import { registrarUsuario, obtenerUsuario } from "../controllers/usuariosController.js";
const router = express.Router();

router.post('/registrarse', registrarUsuario);
router.post('/login', obtenerUsuario);

export default router;