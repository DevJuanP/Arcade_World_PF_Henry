const { Router } = require("express") ;
const { getAllVGHandler, postVGHandler } = require("../handlers/VGHandler.js") ;

const VGrouter = Router()

VGrouter.get('/', getAllVGHandler)
VGrouter.post('/', postVGHandler)

module.exports =  VGrouter