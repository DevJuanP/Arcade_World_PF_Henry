const { Sequelize } = require('sequelize') 
require('dotenv').config()

const Videogames = require('./models/Videogames.js')  
const Users = require('./models/Users.js')


const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/arcade`,{
    logging: false
})

Videogames(sequelize)
Users(sequelize)

const { Videogame, User } = sequelize.models

///Las relaciones:
const JuegoFavorito = sequelize.define('JuegoFavorito', {})
const JuegoComprado = sequelize.define('JuegoComprado', {})

Videogame.belongsToMany(User, {through: JuegoFavorito})
User.belongsToMany(Videogame, {through: JuegoFavorito})

Videogame.belongsToMany(User, {through: JuegoComprado})
User.belongsToMany(Videogame, {through: JuegoComprado})

console.log(sequelize.models);
module.exports = {
    conn: sequelize,
    ...sequelize.models
}
