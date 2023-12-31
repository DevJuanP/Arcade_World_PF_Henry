const { Sequelize } = require('sequelize') 
require('dotenv').config()
const { DataTypes } = require('sequelize')

const Videogames = require('./models/Videogames.js')  
const Users = require('./models/Users.js')
const genres = require('./models/genres.js')
const platforms = require('./models/platforms.js')

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/arcade`,{
    logging: false
})

Videogames(sequelize)
Users(sequelize)
genres(sequelize)
platforms(sequelize)

const { Videogame, User, genre, platform } = sequelize.models

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
//hola :c
Videogame.belongsToMany(User, {through: VG_User})
User.belongsToMany(Videogame, {through: VG_User})

const Videogame_Genre = sequelize.define('videogame_Genre', {}, { timestamps: false });
Videogame.belongsToMany(genre, {through: Videogame_Genre})
genre.belongsToMany(Videogame, {through: Videogame_Genre})

const Videogame_Platform = sequelize.define('videogame_Plataform', {}, { timestamps: false });
Videogame.belongsToMany(platform, {through: Videogame_Platform})
platform.belongsToMany(Videogame, {through: Videogame_Platform})

console.log(sequelize.models);
module.exports = {
    conn: sequelize,
    ...sequelize.models
}
