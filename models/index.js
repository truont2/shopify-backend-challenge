const TennisRacket = require("./TennisRacket");
const Warehouse = require("./Warehouse");

Warehouse.hasMany(TennisRacket,{
    onDelete:"CASCADE"
});

TennisRacket.belongsTo(Warehouse);




module.exports={
    TennisRacket,
    Warehouse,
}