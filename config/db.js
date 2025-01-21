import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const db = new Sequelize(process.env.DB_URL,{
    dialect: 'mysql',
    define:{
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operetionAliases: false
})

export default db;