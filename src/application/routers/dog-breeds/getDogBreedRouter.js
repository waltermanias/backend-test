const BaseRouter = require("../baseRouter")

const UseCase = require('../../../domain/useCases/getDogBreedUseCase')

class GetDogBreedRouter extends BaseRouter {
    async onRoute({headers, query, body, params}) {

        const response = await new UseCase().get(params.id);
        return {
            statusCode: 200,
            data: response
        }
    }
}

module.exports = GetDogBreedRouter