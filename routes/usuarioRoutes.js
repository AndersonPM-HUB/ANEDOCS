import express from 'express'
import { carguePDF, uploadFiles , formularioLogin , formularioRegister,formilarioRecuperacionPassword, registrar, comprobarCuenta, autenticar} from '../controllers/userController.js'



//para el login y el registro del usuario SEND JSON 
const router = express.Router()



router.get('/', (req, res) => {
    res.redirect('/login'); // Redirect to the login page
});

router.get('/upload_file', uploadFiles);
router.post('/upload_file', carguePDF);

router.get('/login', formularioLogin);
router.post('/login', autenticar);

router.get('/register', formularioRegister);
router.post('/registrar', registrar);
router.get('/confirmar/:token', comprobarCuenta);


router.get('/recuperacion', formilarioRecuperacionPassword);





export default router