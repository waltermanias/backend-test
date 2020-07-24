const ExternalBreedService = require('../../infrastructure/services/externalBreedsService');;
const GetBreedImageService = require('../../infrastructure/services/imageService');
const UploaderService = require('../../infrastructure/services/uploaderService');
const BreedService = require('../../infrastructure/services/breedsService');

class CreateDogBreedUseCase {

    constructor() {
        this.externalService = new ExternalBreedService();
        this.imageService = new GetBreedImageService();
        this.uploaderService = new UploaderService();
        this.persistenceService = new BreedService();
    }

    async create() {

        // 1. Get extenal image as buffer
        const randomBreed = await this.externalService.random();
        const splitted = randomBreed.message.split("/")

        // 2. Get the breed name
        const originalName = splitted[splitted.length - 2].replace("-", " ")
        const filename = splitted[splitted.length - 1]


        // 3. Get buffer image
        const breedPhoto = await this.imageService.get(randomBreed.message);

        const uploadResult = await this.uploaderService.upload({buffer: breedPhoto, key: filename});

        const entity = {
            name: originalName,
            uploadAt: new Date(),
            location: uploadResult.Location
        }
        return this.persistenceService.save(entity)

    }



}

module.exports = CreateDogBreedUseCase