import express from "express";
import { enviarPartida, ingresarPartida, descartarCartas, crearPartida } from "../controllers/partidaController.js";

const router = express.Router();


router.get("/", enviarPartida);
router.post("/crearPartida", crearPartida)
router.post("/ingresarPartida", ingresarPartida);
router.post("/descartarCartas", descartarCartas);



export default router;