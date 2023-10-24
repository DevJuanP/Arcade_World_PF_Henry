const { Videogame } = require('../db') 

const getAllVGHandler = async () => {

}

const postVGHandler = async (req, res) => {
    try {
        console.log('body',req.body);
        const {name} = req.body
        await Videogame.create({
            name,
        })
        res.status(200).json({
            succses: 'The video game was successfully uploaded to the database'
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    postVGHandler,
    getAllVGHandler
}