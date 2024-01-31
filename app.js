import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'

//created app
const app = express()
const port = 3000



//routing
app.use('/', usuarioRoutes)




//habilitar pug para templates
app.set('view engine', 'pug')
app.set('views', './views')


//Configuration 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
}); 