const BreedModel = require('../models/breedsModel');
class BreedsService {

    async save(entity) {
        const breed = await new BreedModel(entity).save()
        return JSON.parse(JSON.stringify(breed))
    }

    async getById(id) {
        return BreedModel.findById(id)
    }

    async get() {
        return BreedModel.find({})
    }

    async remove(id) {
        return BreedModel.findByIdAndRemove(id)
    }

}

module.exports = BreedsService