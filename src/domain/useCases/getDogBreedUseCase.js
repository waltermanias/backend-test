const BreedsService = require('../../infrastructure/services/breedsService');

class GetDogBreedsUseCase {
    constructor() {
        this.breedService = new BreedsService();
    }
    async get(id) {
        return this.breedService.getById(id)
    }

}

module.exports = GetDogBreedsUseCase