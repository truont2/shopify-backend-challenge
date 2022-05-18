const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Warehouse extends Model {}

Warehouse.init({
    // add properites here, ex:
    location:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    sequelize,
});

module.exports=Warehouse;