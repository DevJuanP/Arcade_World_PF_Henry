const { Router } = require('express') 
const VGrouter = require('./VGrouter.js') 

const router = Router()

router.use('/videogame', VGrouter)

module.exports = router