

const proteccionRuta = async (req, res, next) => {
    
    // verificar el token 

    const { token } = req.cookies['token']

    if (!token) {
        return res.redirect('/login');
    }

    next(); 
}


export default proteccionRuta;