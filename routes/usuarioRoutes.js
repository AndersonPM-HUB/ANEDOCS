import express from 'express'
import { formularioLogin , formularioRegister,formilarioRecuperacionPassword} from '../controllers/userController.js'


//para el login y el registro del usuario SEND JSON 
const router = express.Router()



router.get('/login', formularioLogin);
router.get('/register', formularioRegister);
router.get('/recuperacion', formilarioRecuperacionPassword);





export default router