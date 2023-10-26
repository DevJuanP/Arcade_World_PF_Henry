const { Router } = require('express') 
const VGrouter = require('./VGrouter.js') 
const UserRouter = require('./UserRouter.js')
const Favorites = require('./Favorites.js')
const getplatformshandler = require('../handlers/getplatformshandler.js')
const router = Router()
const getGeresHandler = require('../handlers/getGeresHandler.js')
router.use('/videogame', VGrouter)
router.use('/user', UserRouter)
//router.use('/favorites', Favorites)
router.use('/platform', getplatformshandler)
router.use('/genre',getGeresHandler)

module.exports = router