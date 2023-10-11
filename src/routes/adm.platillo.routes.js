import { Router } from 'express';
import {
  getPlatillo,
  createPlatillo,
  updatePlatillo,
  deletePlatillo,
  getPlatilloByID,
} from '../controllers/admplatillos.controllers.js';

const router = Router();

router.get('/platillos', getPlatillo);
router.get('/platillos/:id', getPlatilloByID);
router.post('/platillos', createPlatillo);
router.put('/platillos/:id', updatePlatillo);
router.delete('/platillos/:id', deletePlatillo);

export default router;
