import { Router } from 'express';
import {
  listarCategorias,
  crearCategoria,
  eliminarCategoria,
  editarCategoria,
} from '../controllers/categorias.controllers.js';

const router = Router();

router.get('/categorias', listarCategorias);
router.post('/categorias', crearCategoria);
router.delete('/categorias/:id', eliminarCategoria);
router.put('/categorias/:id', editarCategoria);

export default router;
