import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Viajes = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.DECIMAL(10, 2), 
        allowNull: false
    },
    imagen: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.TEXT, 
        allowNull: true
    },
    duracion: {  
        type: Sequelize.STRING,
        allowNull: false
    },
    valoracion_promedio: {  
        type: Sequelize.FLOAT,
        allowNull: false
    },
    destino: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    salida_desde: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo_paquete: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});
