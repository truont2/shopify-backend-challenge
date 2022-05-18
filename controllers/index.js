const router = require('express').Router();
const apiRoutes = require('./api');

// condense all the routes into a single export 
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
  });
  
module.exports = router;