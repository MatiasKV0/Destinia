import express from "express";
import { paginaInicio, paginaNosotros, paginaViajes, paginaContacto, paginaDetalle } from "../controllers/paginasController.js";

const router = express.Router();

router.get('/', paginaInicio);
router.post('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalle);

router.get('/contacto', paginaContacto);
router.post('/contacto', paginaInicio);

export default router;