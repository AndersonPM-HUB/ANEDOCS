import express from 'express';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/db.js';



//created app
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true})) //para poder leer formulario


//entry
app.use('/', usuarioRoutes)


//manejo de archivos staticos 
app.use(express.static('public'))

//habilitar pug para templates
app.set('view engine', 'pug')
app.set('views', './views')



// Use csrf middleware
app.use(cookieParser())
app.use(csrf({ cookie: true }))


//conexion con bd
try {
    await db.authenticate();
    db.sync() //CREATE TABLE SINO EXISTE
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
 
//Configuration 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
}); 