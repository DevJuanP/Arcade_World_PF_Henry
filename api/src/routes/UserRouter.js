const { Router } = require("express") ;
const { getAllUserHandler, postUserHandler } = require("../handlers/UserHandlers.js") ;

const VGrouter = Router()

VGrouter.get('/', getAllUserHandler)
VGrouter.post('/', postUserHandler)

module.exports =  VGrouter