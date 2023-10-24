const { Router } = require('express') 
const VGrouter = require('./VGrouter.js') 
const UserRouter = require('./UserRouter.js')
const Favorites = require('./Favorites.js')

const router = Router()

router.use('/videogame', VGrouter)
router.use('/user', UserRouter)
router.use('/favorites', Favorites)

module.exports = router