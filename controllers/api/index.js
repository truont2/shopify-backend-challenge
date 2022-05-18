const router = require('express').Router();
const tennisRacketRoutes = require('./tennisRacketRoutes');
const warehouseRoutes = require('./warehouseRoutes');

router.use('/tennisRackets', tennisRacketRoutes);
router.use('/warehouses', warehouseRoutes);

module.exports = router;