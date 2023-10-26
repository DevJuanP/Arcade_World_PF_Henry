const { Videogame, genre, platform } = require('../db') 

const getAllVGHandler = async (req, res) => {
    try {
        const games = await Videogame.findAll({
            include:[
                {model: genre},
                {model: platform}
            ]}
        )
        res.status(200).json(games)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postVGHandler = async (req, res) => {
    try {
        console.log('body',req.body);
        ///const {name} = req.body
        await Videogame.create({
            ...req.body
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