import { Sequelize } from "sequelize";
import dotenv from "dotenv";


dotenv.config({ path: ".env" }); //archivo de configuracion

//conectar a la bd 
const db = new Sequelize(
{
    dialect: "sqlite",
    storage: process.env.BD_NOMBRE,
    define: {
        timestamps: true, //almacenamiento de datos
    },
    pool: {
        max: 5, //mantener y reutilizar las conexiones vivas
        min: 0,
        acquire: 30000, //tiempo para marcar una conexión como fallida
        idle: 10000 //librear memoria
    },
  
});




export default db;