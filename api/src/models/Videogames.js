const { DataTypes } = require("sequelize") 

module.exports = (sequelize) => {
    sequelize.define('Videogame', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
          },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 5,
            }
            },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            
        },
        
    },  {timestamps: false})
} 