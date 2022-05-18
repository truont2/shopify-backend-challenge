const router = require('express').Router();
const { Warehouse, TennisRacket } = require('../../models');


router.get('/', async (req, res) => {
    try {
        const racketData = await TennisRacket.findAll({
            include:[Warehouse]
        }) 
        console.log(racketData);
        res.status(200).json(racketData);
    } catch(err) {
        res.status(500).json(err);
    }
    
})

router.get('/:id', async (req, res) => {
    try {
        const racket = TennisRacket.findByPk(req.params.id, {
            include: [Warehouse]
        })
        if(!product){
            res.status(404).json({message: "This product does not exist!"});
            return;
        }
        res.status(200).json(product);
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


router.put('/:id', async(req, res) => {
    try {
        const updatedRacket = await Product.update(req.body, {
            where: {
              id: req.params.id,
            },
          })

          res.status(200).json(updatedRacket);
    } catch(err) {
        res.status(500).json(err);
    }
    
})


router.delete('/:id', async (req, res) => {
    // delete one product by its `id` value
    try {
      const deletedRacket = await TennisRacket.destroy({
        where: {
          id: req.params.id
        }
      })
      console.log(deletedRacket);
      res.status(200).json(deletedRacket);
    } catch (err) {
      res.status(500).json(err)
    }
});