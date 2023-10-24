const { DataTypes } = require("sequelize") 

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
          },
        name: {
            type: DataTypes.STRING,
        }
    },  {timestamps: false})
}