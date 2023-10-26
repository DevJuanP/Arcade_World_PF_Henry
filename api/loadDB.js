const genres = [
    "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Massively Multiplayer",
    "Racing",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card"
    ]

const platform_s = [
    "PlayStation",
    "Commodore / Amiga",
    "PC",
    "Android",
    "PlayStation 3",
    "Xbox 360",
    "iOS",
    "Nintendo Switch",
    "Wii",
    "macOS",
    "PlayStation 4",
    "Xbox One",
    "Linux",
    "Nintendo 3DS",
    "PS Vita",
    "PlayStation 5",
    "Xbox Series S/X",
    "Wii U",
    "Web",
    "Xbox",
    "Nintendo DS",
    "PlayStation 2",
    "GameCube",
    "Classic Macintosh",
    "Nintendo 64",
    "SEGA Saturn",
    "Game Boy Advance",
    "PSP",
    "Dreamcast",
    "Game Boy Color"
    ]

const games = [
    {
    "id": 3498,
    "name": "Grand Theft Auto V",
    "description": "The videogame \"Grand Theft Auto V\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "PlayStation 5",
    "Xbox Series S/X",
    "PC",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox 360",
    "Xbox One"
    ],
    "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    "released": "2013-09-17",
    "rating": 4.47,
    "origin": "API",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 3328,
    "name": "The Witcher 3: Wild Hunt",
    "description": "The videogame \"The Witcher 3: Wild Hunt\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "Xbox Series S/X",
    "PlayStation 4",
    "Nintendo Switch",
    "PC",
    "Xbox One",
    "PlayStation 5"
    ],
    "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "released": "2015-05-18",
    "rating": 4.66,
    "origin": "API",
    "genres": [
    "Action",
    "Adventure",
    "RPG"
    ]
    },
    {
    "id": 4200,
    "name": "Portal 2",
    "description": "The videogame \"Portal 2\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "PlayStation 3",
    "PC",
    "Xbox 360",
    "Linux",
    "macOS",
    "Xbox One"
    ],
    "image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    "released": "2011-04-18",
    "rating": 4.61,
    "origin": "API",
    "genres": [
    "Shooter",
    "Puzzle"
    ]
    },
    {
    "id": 4291,
    "name": "Counter-Strike: Global Offensive",
    "description": "The videogame \"Counter-Strike: Global Offensive\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "PC",
    "Xbox 360",
    "PlayStation 3"
    ],
    "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    "released": "2012-08-21",
    "rating": 3.56,
    "origin": "API",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 5286,
    "name": "Tomb Raider (2013)",
    "description": "The videogame \"Tomb Raider (2013)\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "PlayStation 4",
    "macOS",
    "PC",
    "Xbox One",
    "Xbox 360",
    "PlayStation 3"
    ],
    "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "released": "2013-03-05",
    "rating": 4.05,
    "origin": "API",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 13536,
    "name": "Portal",
    "description": "The videogame \"Portal\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "Android",
    "PlayStation 3",
    "Xbox 360",
    "Linux",
    "macOS",
    "PC",
    "Nintendo Switch"
    ],
    "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    "released": "2007-10-09",
    "rating": 4.51,
    "origin": "API",
    "genres": [
    "Adventure",
    "Puzzle"
    ]
    },
    {
    "id": 12020,
    "name": "Left 4 Dead 2",
    "description": "The videogame \"Left 4 Dead 2\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "macOS",
    "Linux",
    "PC",
    "Xbox 360"
    ],
    "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    "released": "2009-11-17",
    "rating": 4.09,
    "origin": "API",
    "genres": [
    "Action",
    "Shooter"
    ]
    },
    {
    "id": 5679,
    "name": "The Elder Scrolls V: Skyrim",
    "description": "The videogame \"The Elder Scrolls V: Skyrim\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "PC",
    "Nintendo Switch",
    "Xbox 360",
    "PlayStation 3"
    ],
    "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "released": "2011-11-11",
    "rating": 4.42,
    "origin": "API",
    "genres": [
    "Action",
    "RPG"
    ]
    },
    {
    "id": 28,
    "name": "Red Dead Redemption 2",
    "description": "The videogame \"Red Dead Redemption 2\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "PC",
    "PlayStation 4",
    "Xbox One"
    ],
    "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "released": "2018-10-26",
    "rating": 4.59,
    "origin": "API",
    "genres": [
    "Action",
    "Adventure"
    ]
    },
    {
    "id": 4062,
    "name": "BioShock Infinite",
    "description": "The videogame \"BioShock Infinite\" is a game of the no genres genres. Is available for no plataforms. also you can get it in stores like no store.",
    "platforms": [
    "PlayStation 4",
    "Xbox 360",
    "Nintendo Switch",
    "Linux",
    "PC",
    "PlayStation 3",
    "Xbox One"
    ],
    "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    "released": "2013-03-26",
    "rating": 4.38,
    "origin": "API",
    "genres": [
    "Action",
    "Shooter"
    ]
    },]


gamesToLoad = games.map((vg) => {
    return{
        name: vg.name,
        description: vg.description,
        image: vg.image,
        released: vg.released,
        price: (Math.random() * 10 + 40).toFixed(2),

    }
})

const {genre, platform, Videogame, videogame_Genre, videogame_Plataform } = require('./src/db.js') 

const LoadGenre = async () => {
    try {
        const generos = await genre.bulkCreate(genres.map((g) => {
            return{
                name: g
            }
        }));
        console.log('tabala "genre" cargada');
    } catch (error) {
        console.log(error.message);
    }
}

const LoadPlatform = async () => {
    try {
        const plataformas = await platform.bulkCreate(platform_s.map((p) => {
            return{
                name: p
            }
        }));
        console.log('tabala "platform" cargada');
    } catch (error) {
        console.log(error.message);
    }
}

const LoadGame = async () => {
    try {
        const juegos = await Videogame.bulkCreate(gamesToLoad)
        console.log('tabla de "Videogames" cargada')
    } catch (error) {
        console.log(error.message);
    }
}

const LoadDB = async () => {
    try {
        await LoadGenre()
        await LoadPlatform()
        await LoadGame()

       const juegos = await Videogame.findAll()
       const gamesIds = juegos.map(g => g.id)

       //carga las relaciones games  -  generos
       const VG_G = games.map( vg => {
            return vg.genres.map( g => genres.indexOf(g)+1)
        })

        for(let i in gamesIds){
            for(let j in VG_G[i]){
                await videogame_Genre.create({
                    VideogameId: gamesIds[i],
                    genreId: VG_G[i][j]
                }) 
            }
        }
        console.log("relaciones de Videogames con genre completada");

        // carga las relaciones games - platforms
        const VG_P = games.map( vg => {
            return vg.platforms.map( p => platform_s.indexOf(p)+1)
        })
        
        console.log(gamesIds, VG_P);

        for(let i in gamesIds){
            for(let j in VG_P[i]){
                await videogame_Plataform.create({
                    VideogameId: gamesIds[i],
                    platformId: VG_P[i][j]
                }) 
            }
        }
        console.log("relaciones de Videogames con platforms completada");

    } catch (error) {
        console.log(error.message);
    }
}

LoadDB()