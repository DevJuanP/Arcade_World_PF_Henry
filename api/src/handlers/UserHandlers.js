const { User, Videogame } = require('../db') 

const getAllUserHandler = async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: {
                model: Videogame,
            }
        })
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postUserHandler = async (req, res) => {
    try {
        const {name} = req.body
        await User.create({name})
        res.status(200).json({
            succses: 'The user was successfully uploaded to the database'
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
   
}

module.exports = {
    getAllUserHandler,
    postUserHandler
}