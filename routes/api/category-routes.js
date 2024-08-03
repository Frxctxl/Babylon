const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const cats = await Category.findAll();
  res.json(cats);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const cat = await Category.findByPk(req.params.id);
  res.json(cat);
});

router.post('/', async (req, res) => {
  // create a new category
  const newCat = await Category.create(req.body);
  res.json(newCat);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.json(await Category.findByPk(req.params.id));
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json(await Category.findAll())
});

module.exports = router;
