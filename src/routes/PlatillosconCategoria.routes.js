import { Router } from 'express';
import {
    getCategoriasConPlatillos,
} from '../controllers/PlatillosconCategoria.controllers.js';


const router = Router();

router.get('/categoriasconplatillos', getCategoriasConPlatillos);


export default router;