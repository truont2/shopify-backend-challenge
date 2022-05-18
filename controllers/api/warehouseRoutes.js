const router = require('express').Router();
const { Warehouse, TennisRacket } = require('../../models');

// retrieve all warehouses
router.get('/', async (req, res) => {
    try {
        const warehouseData = await Warehouse.findAll({
            include:[TennisRacket]
        }) 
        res.status(200).json(warehouseData);
    } catch(err) {
        res.status(500).json(err);
    }
    
})

// retrieve a specific warehouse
router.get('/:id', async (req, res) => {
    try {
        const warehouse = await Warehouse.findByPk(req.params.id, {
            include: [TennisRacket]
        })
        if(!warehouse){
            res.status(404).json({message: "This warehouse does not exist!"});
            return;
        }
        res.status(200).json(warehouse);
    }catch(err) {
        res.status(500).json(err);
    }
})

// create new warehouse
router.post('/', async (req, res) => {
    /* req.body should look like this...
      {
        name: 'Amazon Warehouse', 
        location: 'Seattle, WA', 

    },
    */
   try {
        const newWarehouse = await Warehouse.create(req.body);
        res.status(200).json(newWarehouse);
   } catch(err) {
       res.status(400).json(err);
   }
  });

// update a specific warehouse
router.put('/:id', async(req, res) => {
    try {
        const updatedWarehouse = await Warehouse.update(req.body, {
            where: {
              id: req.params.id,
            },
          })

          res.status(200).json(updatedWarehouse);
    } catch(err) {
        res.status(500).json(err);
    }
    
})

// delete a warehouse
router.delete('/:id', async (req, res) => {
    // delete one warehouse by its `id` value
    try {
      const deletedWarehouse = await Warehouse.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json(deletedWarehouse);
    } catch (err) {
      res.status(500).json(err)
    }
});

// export all routes to use
module.exports = router;