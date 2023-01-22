import express from 'express';
import { getUserController, putUserController } from '../../controllers/userController.js';


const router = express.Router();

router.get('/:email', getUserController);
router.put('/', putUserController);

export default router;
