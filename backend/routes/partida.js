import express from "express";
import { obtenerPartida } from "../controllers/partidaController.js";

const router = express.Router();


router.get("/", obtenerPartida);



export default router;