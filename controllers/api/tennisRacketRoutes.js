const router = require('express').Router();
const { Warehouse, TennisRacket } = require('../../models');

// retrieve all tennis rackets
router.get('/', async (req, res) => {
    try {
        const racketData = await TennisRacket.findAll({
            include:[Warehouse]
        }) 
        res.status(200).json(racketData);
    } catch(err) {
        res.status(500).json(err);
    }
    
})

// retrieve a single racket by id
router.get('/:id', async (req, res) => {
    try {
        const racket = await TennisRacket.findByPk(req.params.id, {
            include: [Warehouse]
        })
        if(!racket){
            res.status(404).json({message: "This racket does not exist!"});
            return;
        }
        res.status(200).json(racket);
    }catch(err) {
        res.status(500).json(err);
    }
})

// create new racket
router.post('/', async (req, res) => {
    /* req.body should look like this...
      {
        name: 'Babolat Pure Aero Plus', 
        gripSize: '4 1/8', 
        brand: 'Babolat', 
        weight: 11.3,
        balance: "6 pts HL", 
        length: 27.5,
        warehouseId: 1
    },
    */
   try {
        const newRacket = await TennisRacket.create(req.body);
        res.status(200).json(newRacket);
   } catch(err) {
       res.status(400).json(err);
   }
  });

// update a specific racket
router.put('/:id', async(req, res) => {
    try {
        const updatedRacket = await TennisRacket.update(req.body, {
            where: {
              id: req.params.id,
            },
          })

          res.status(200).json(updatedRacket);
    } catch(err) {
        res.status(500).json(err);
    }
    
})

// assign location if not done on creation
router.put('/assign/:id', async(req, res) => {
    try {
        const updatedRacket = await TennisRacket.update(req.body, {
            where: {
              id: req.params.id,
            },
          })

          res.status(200).json(updatedRacket);
    } catch(err) {
        res.status(500).json(err);
    }
    
})

// delete a specific racket
router.delete('/:id', async (req, res) => {
    // delete one product by its `id` value
    try {
      const deletedRacket = await TennisRacket.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json(deletedRacket);
    } catch (err) {
      res.status(500).json(err)
    }
});

// export all routes
module.exports = router;