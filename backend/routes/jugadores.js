import express from "express";
import { obtenerJugador } from "../controllers/jugadoresController.js";

const router = express.Router();


router.get("/", obtenerJugador);

export default router;