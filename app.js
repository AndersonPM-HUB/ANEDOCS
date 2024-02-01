import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'


//created app
const app = express()
const port = 3000



//entry
app.use('/', usuarioRoutes)


//manejo de archivos staticos 
app.use(express.static('public'))


//habilitar pug para templates
app.set('view engine', 'pug')
app.set('views', './views')


//conexion con bd
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


  
//Configuration 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
}); 