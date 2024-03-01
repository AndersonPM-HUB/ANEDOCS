import express from 'express';
import { plataforma } from '../controllers/plataformaController.js';

const router = express.Router();



router.get('/', plataforma)


export default router