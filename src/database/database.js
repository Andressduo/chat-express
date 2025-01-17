const { Sequelize } = require("sequelize");
const config = require("../config");

const db = new Sequelize({
    dialect : 'postgres',
    host : config.db.host,
    username : config.db.username,
    password : config.db.password,
    database : config.db.dbName
    
    /* estos es para hacer la conexion con un DB de producciion */
    dialectOptions: 
        process.env.NODE_ENV === 'production'
            ? {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            } : {}
    
})

module.exports = db
