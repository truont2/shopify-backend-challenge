const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TennisRacket extends Model {}

TennisRacket.init({
    // add properites here, ex:
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    gripSize:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    brand:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    // in oz
    weight:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    balance:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    // in inches
    length:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
},{
    sequelize,
});

module.exports=TennisRacket;