import express from "express";
import { crearNuevaMesa, ingresarMesa, mostrarMesas } from "../controllers/mesasController.js";
const router = express.Router();


router.get("/", mostrarMesas);
router.post("/", crearNuevaMesa);
router.post("/ingresarMesa", ingresarMesa)


export default router;