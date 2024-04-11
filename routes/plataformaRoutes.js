import express from 'express';
import { plataforma } from '../controllers/plataformaController.js';
import  proteccionRuta  from '../middleware/seguridad.js';

const router = express.Router();



router.get('/', proteccionRuta, plataforma )


export default router