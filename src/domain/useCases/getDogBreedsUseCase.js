const BreedsService = require('../../infrastructure/services/breedsService');

class GetDogBreedUseCase {
    constructor() {
        this.breedService = new BreedsService();
    }
    async get() {
        return this.breedService.get()
    }


}

module.exports = GetDogBreedUseCase