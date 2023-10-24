const { Sequelize } = require('sequelize') 
require('dotenv').config()
const { DataTypes } = require('sequelize')

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
const VG_User = sequelize.define('VG_user', {
    favorites: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    comprado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    review: {
        type: DataTypes.STRING,
        defaultValue: ''
    }
}, {timestamps: false})

Videogame.belongsToMany(User, {through: VG_User})
User.belongsToMany(Videogame, {through: VG_User})

console.log(sequelize.models);
module.exports = {
    conn: sequelize,
    ...sequelize.models
}
