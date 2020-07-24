const BaseRouter = require("../baseRouter")

const UseCase = require('../../../domain/useCases/createDogBreedUseCase')

class CreateDogBreedRouter extends BaseRouter {
    async onRoute({headers, query, body, params}) {
        const response = await new UseCase().create();
        return {
            statusCode: 200,
            data: response
        }
    }
}

module.exports = CreateDogBreedRouter