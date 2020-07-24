const BaseRouter = require("../baseRouter")

const UseCase = require('../../../domain/useCases/deleteDogBreedUseCase')

class DeleteDogBreedRouter extends BaseRouter {
    async onRoute({headers, query, body, params}) {
        await new UseCase().delete(params.id);
        return {
            statusCode: 200,
            data: {
                message: "Ok"
            }
        }
    }
}

module.exports = DeleteDogBreedRouter