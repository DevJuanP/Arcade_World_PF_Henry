const { Router } = require("express") ;
const { Videogame, User, VG_user } = require('../db')
//const { getAllVGHandler, postVGHandler } = require("../handlers/VGHandler.js") ;

const FBrouter = Router()

FBrouter.post('/', async ( req, res) => {
    try {
        console.log('body', req.body);
        const {UserId, GameId} = req.body
        const usuario = await User.findByPk(UserId);
        const juego = await Videogame.findByPk(GameId);
        
        await VG_user.create({
            UserId: UserId,
            VideogameId: GameId,
            favorites: true,
          });
        res.status(200).json({
            succses: 'se agregó un favorito'
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports =  FBrouter