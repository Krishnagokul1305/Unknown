// routes/compilerRoutes.js
import { Router } from 'express';
import { compileJavaCode } from '../controller/javaController.js';

const router = Router();

router.post('/compile', compileJavaCode);

export default router;
