import { Router } from 'express';
import {
    getPlatillo,
    createPlatillo,
    updatePlatillo,
    deletePlatillo,
    getPlatilloID,
} from '../controllers/platillos.controllers.js';


const router = Router();

router.get('/platillos', getPlatillo);
router.get('/platillos/:id', getPlatilloID);
router.post('/platillos', createPlatillo);
router.put('/platillos/:id', updatePlatillo);
router.delete('/platillos/:id', deletePlatillo);

export default router;