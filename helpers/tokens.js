import jwt from 'jsonwebtoken';

const generarId = () =>  Math.random().toString(36).substr(2) + Date.now().toString(36); // Genera un ID único

//generar un token para el usuario
const generarToken = (id) => {
    return jwt.sign({
         id,
    }, process.env.JWT_SECRET, {
        expiresIn: 86400 // expires in 24 hours
    });
}   




export { 
    generarId ,
    generarToken
}