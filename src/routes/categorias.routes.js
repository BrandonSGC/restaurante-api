import { Router } from 'express';
import {
    listarCategorias,
    crearCategoria,
    eliminarCategoria,
    updateCategoria,
    getCategoriaID,
} from '../controllers/categorias.controllers.js';

const router = Router();

router.get('/categorias', listarCategorias);
router.get('/categorias/:id', getCategoriaID);
router.post('/categorias', crearCategoria);
router.put('/categorias/:id', updateCategoria);
router.delete('/categorias/:id', eliminarCategoria);

export default router;