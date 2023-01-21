import express from 'express';
import testRoutes from './test.js';

const router = express.Router();

router.use('/test', testRoutes);

export default router;
