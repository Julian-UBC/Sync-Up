import express from 'express';
import * as userController from '../../controllers/userController';

const router = express.Router();

router.get('/', userController.getUserController);
router.put('/', userController.putUserController);

export default router;
