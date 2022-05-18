const router = require('express').Router();
const apiRoutes = require('./api');

// condense all the routes into a single export 
router.use('/api', apiRoutes);
  
module.exports = router;