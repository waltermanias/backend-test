const BaseRouter = require("../baseRouter")

const UseCase = require('../../../domain/useCases/getDogBreedsUseCase')

class GetDogBreedsRouter extends BaseRouter {
    async onRoute({headers, query, body, params}) {
        const response = await new UseCase().get();
        return {
            statusCode: 200,
            data: response
        }
    }
}

module.exports = GetDogBreedsRouter