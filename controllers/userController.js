
const formularioLogin = (req , res) => {
    res.render('auth/login',{
        titulo: 'Login Usuario'
    });};



const formularioRegister = (req , res) => {
    res.render('auth/register',{
        titulo: 'Registrar Usuario'
    });}


const formilarioRecuperacionPassword = (req , res) => {
    res.render('auth/recuperacion',{
        titulo: 'Recuperacion de Password'
    });}


//other for export multiples functions different to export default 
export {
    formularioLogin,
    formularioRegister,
    formilarioRecuperacionPassword
}
