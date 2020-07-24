const router = require('express').Router()

const expressAdapter = require('../application/adapters/expressAdapter')

const createDogBreedRouter = require('../application/routers/dog-breeds/createDogBreedRouter');
const deleteDogBreedRouter = require('../application/routers/dog-breeds/deleteDogBreedRouter');
const getDogBreedRouter = require('../application/routers/dog-breeds/getDogBreedRouter');
const getDogBreedsRouter = require('../application/routers/dog-breeds/getDogBreedsRouter');

router.post('/', expressAdapter.adapt(new createDogBreedRouter()))
router.get('/:id', expressAdapter.adapt(new getDogBreedRouter()))
router.delete('/:id', expressAdapter.adapt(new deleteDogBreedRouter()))
router.get('/', expressAdapter.adapt(new getDogBreedsRouter()))

module.exports = router