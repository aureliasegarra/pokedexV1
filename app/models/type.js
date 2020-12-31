const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class Type extends Model {};

Type.init({
    name: DataTypes.TEXT,
    color: DataTypes.TEXT,
    
}, {
    sequelize,
    tableName: "type"
});

module.exports = Type;