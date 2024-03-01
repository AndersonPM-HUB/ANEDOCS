import { DataTypes } from "sequelize";
import db from "../config/db.js";
import bcrypt from "bcrypt";

const Usuario = db.define('informes_usuario', {
    cedula: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    token:{ //enviar por email 
        type: DataTypes.STRING,
    },
    confirmado: DataTypes.BOOLEAN,
},{
    //hoock para encriptar la contraseña
    hooks: {
        beforeCreate: async (usuario)=> {
            usuario.password = await bcrypt.hash(usuario.password, bcrypt.genSaltSync(10));
        }
    }
})

//funcion para comparar la contraseña, registrandio en el prototype para la calse usuario 
Usuario.prototype.validarPassword = async function(password) {
    return await bcrypt.compareSync(password, this.password);
}

export default Usuario;
