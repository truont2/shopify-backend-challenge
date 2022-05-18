const TennisRacket = require("./TennisRacket");
const Warehouse = require("./Warehouse");

// set up associations
// warehouse holds many tennis rackets 
Warehouse.hasMany(TennisRacket,{
    onDelete:"CASCADE"
});
// each racket may belong in a warehouse
TennisRacket.belongsTo(Warehouse);

// export models for later use
module.exports={
    TennisRacket,
    Warehouse,
}