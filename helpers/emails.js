import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {

    //iniciar sesion
    const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
    });
    console.log(datos);


    const{nombre, email, token} = datos;

    
    await transporter.sendMail({
        from: 'ANEREPORTS.COM',
        to: email,
        subject: 'Confirmar tu cuenta en ANE REPORTS',
        text: 'Bienvenido a ANE REPORTS. ',
        html: `<p>Bienvenido ${nombre} , a ANE REPORTS. </p>
        <p>Para confirmar tu cuenta, haz click en el siguiente enlace</p>
        <a href="${process.env.BACKEND_URL}/confirmar/${token}">Confirmar cuenta</a>
        <p>Si no has creado una cuenta, ignora este email</p>
        `

})
}

export {emailRegistro}