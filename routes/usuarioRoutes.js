import express from 'express'
import { formularioLogin } from '../controllers/userController.js'


//para el login y el registro del usuario SEND JSON 
const router = express.Router()



router.get('/login', formularioLogin);





export default router