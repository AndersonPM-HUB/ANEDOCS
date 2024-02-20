import { check, validationResult } from 'express-validator';
import { generarId } from '../helpers/tokens.js'; 
import Usuario from '../models/Usuario.js';
import db from '../config/db.js';
import { emailRegistro } from '../helpers/emails.js';


const formularioLogin = (req , res) => {
    res.render('auth/login',{
        titulo: 'Login Usuario',
    });};


const autenticar = async (req, res) => {
    console.log("Autenticando");
    await check('cedula').notEmpty().withMessage('El campo CC debe ser numerico').run(req);
    await check('password').notEmpty().withMessage("La contraseña debe tener al menos 6 caracteres").run(req);

    let resultado = validationResult(req); //resultado de la validacion 
    //1. verificar que el resultado este vacio 
    if (!resultado.isEmpty()) {
        return res.render('auth/login',{
            titulo: 'Iniciar Sesion',
            errores: resultado.array(),
            });}

    //2. validar que el usuario no exista
    const { cedula, password } = req.body;
    const existeUsuario = await Usuario.findOne({where: {cedula }});

    if (!existeUsuario) {
        return res.render('auth/login',{
            titulo: 'Iniciar Sesion',
            errores: [{msg: 'El usuario no existe'}],
            
        });}

   
}

const formularioRegister = (req , res) => {

    res.render('auth/register', {
        titulo: 'Registrar Usuario',  
        
    })
    }


const formilarioRecuperacionPassword = (req , res) => {
    res.render('auth/recuperacion',{
        titulo: 'Recuperacion de Password'
    });}


const registrar = async(req , res) => {
    
    console.log(req.body)
    //validar datos
    await check('cedula','El campo debe ser numerico').isNumeric().run(req);
    await check('nombre','El nombre es obligatorio').notEmpty().run(req);
    await check('email', 'El email es obligatorio').isEmail().run(req);
    await check('password').isLength({min: 6}).withMessage("La contraseña debe tener al menos 6 caracteres").run(req);
    await check('repetir_password').equals(req.body.password).withMessage('Las contraseñas no coinciden').run(req);

    let resultado = validationResult(req); //resultado de la validacion 
    //1. verificar que el resultado este vacio 
    if (!resultado.isEmpty()) {
        return res.render('auth/register',{
            titulo: 'Registrar Usuario',
            errores: resultado.array(),
            
             
        });}
        
    //2. validar que el usuario no exista
    const existeUsuario = await Usuario.findOne({where: {cedula: req.body.cedula}});

    if (existeUsuario) {
        return res.render('auth/register',{
            titulo: 'Registrar Usuario',
            errores: [{msg: 'El usuario ya existe'}],

        
        });
    }

    const {cedula, nombre, email, password} = req.body;

    const usuario = await Usuario.create({cedula, nombre, email, password, token: generarId(), confirmado: false});

    emailRegistro({
        nombre : usuario.nombre,
        email : usuario.email,
        token : usuario.token
    })

    //confirmacion con  email
    res.render('templates/message', {
        titulo: 'Cuenta creada con exito', 
        mensaje: 'Se ha enviado un correo de confirmacion a tu email'});
    }


const comprobarCuenta = async (req, res) => {
        
        const {token} = req.params;
        console.log(token);

        //verificar el token vaido para el usuario : todas las consulatas con await 
        const usuario = await Usuario.findOne({where: {token}});

        //token no valido
        if (!usuario) {
            return res.render('auth/confirmarCuenta', {
                titulo: 'Error ', 
                mensaje: '0ps, Algo paso , no fue posible confirmar tu cuenta, intenta nuevamente',
                error:true
            });
        }

        //token valido
        usuario.confirmado = true;
        usuario.token = null;

        await usuario.save(); //guardar cambios 

        res.render('auth/confirmarCuenta', {
            titulo: 'Cuenta confirmada con exito', 
            mensaje: 'Ya puedes iniciar sesion',
            error:false
        });
    }


//other for export multiples functions different to export default 
export {
    formularioLogin,
    formularioRegister,
    formilarioRecuperacionPassword,
    registrar,
    comprobarCuenta,
    autenticar
}
