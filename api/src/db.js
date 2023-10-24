const { Sequelize } = require('sequelize') 
require('dotenv').config()

const Videogames = require('./models/Videogames.js')  
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/arcade`,{
    logging: false
})

Videogames(sequelize)

//const { Videogame } = sequelize.models

///Las relaciones:

console.log(sequelize.models);
module.exports = {
    conn: sequelize,
    ...sequelize.models
}
