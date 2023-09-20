const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Comand', {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comand: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });
};
