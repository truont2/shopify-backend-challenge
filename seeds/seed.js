const Rackets = [
    {
        name: 'Babolat Pure Aero Plus', 
        gripSize: '4 1/8', 
        brand: 'Babolat', 
        weight: 11.3,
        balance: "6 pts HL", 
        length: 27.5,
        WarehouseId: 2,
    },
    {
        name: 'HEAD Prestige Pro 2021', 
        gripSize: '4 1/2', 
        brand: 'HEAD', 
        weight: 11.9,
        balance: "6 pts HL", 
        length: 27,
        WarehouseId: 1,
    },
]

const warehouses = [
    {
        name: "Amazon warehouse", 
        location: "Seattle, WA"
    }, 
    {
        name: "USTA Tennis Club", 
        location: "Miami, Florida"
    }
]

// seed databse with data
const sequelize = require("../config/connection");
const {Warehouse, TennisRacket} = require("../models")

const seed = async () => {
    await sequelize.sync({force: true});
    await Warehouse.bulkCreate(warehouses,{individualHooks:true});
    await TennisRacket.bulkCreate(Rackets);
    console.info('Seeding complete! 🌱')
    process.exit(0);
}

seed();