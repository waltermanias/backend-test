const BreedsService = require('../../infrastructure/services/breedsService');
const UploaderService = require('../../infrastructure/services/uploaderService');
class DeleteDogBreedUseCase {

    constructor() {
        this.breedService = new BreedsService();
        this.uploaderService = new UploaderService();
    }

    async delete(id) {
        const breed = await this.breedService.getById(id);
        const splitted = breed.location.split("/")
        const key = splitted[splitted.length - 1]
        await Promise.all([this.breedService.remove(id), this.uploaderService.remove(key)]);
    }

}

module.exports = DeleteDogBreedUseCase