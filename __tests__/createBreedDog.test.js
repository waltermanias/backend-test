const Router = require('../src/application/routers/dog-breeds/createDogBreedRouter');

const ExternalBreedService = require('./../src/infrastructure/services/externalBreedsService');
const GetBreedImageService = require('./../src/infrastructure/services/imageService');
const UploaderService = require('./../src/infrastructure/services/uploaderService');
const BreedService = require('./../src/infrastructure/services/breedsService');

jest.mock('../src/infrastructure/services/breedsService')
jest.mock('../src/infrastructure/services/externalBreedsService')
jest.mock('../src/infrastructure/services/imageService')
jest.mock('../src/infrastructure/services/uploaderService')

describe("When a new dog breed is being created", () => {

    it("Should save successfully a new dog breed", async () => {
        const router = new Router();
        const httpResponse = await router.route({baseUrl: "/api", method: "GET"}, {
            body: {},
            headers: {},
            query: {},
            params: {}
        })
        expect(httpResponse).not.toBe(null);
        expect(httpResponse.statusCode).toBe(200);
        expect(httpResponse.data).toHaveProperty("_id");
        expect(httpResponse.data._id).toHaveLength(24);
        expect(httpResponse.data.name).toBe("cairn");
        expect(httpResponse.data.location).toBe("http://localhost:1000/n02096177_960.jpg");
        expect(httpResponse.data).toHaveProperty("uploadAt");

    })

    it("Should return an error, because there was an error in external service", async () => {
        let spy = jest.spyOn(ExternalBreedService.prototype, "random").mockImplementation(() => {
            throw new Error("Mock error")
        });
        const router = new Router();
        const httpResponse = await router.route({baseUrl: "/api", method: "GET"}, {
            body: {},
            headers: {},
            query: {},
            params: {}
        })
        expect(httpResponse).not.toBe(null);
        expect(httpResponse.statusCode).toBe(500);
        expect(httpResponse.data).toMatchObject({
            message: "Mock error",
            trace: undefined
        })
        spy.mockRestore()
    })

    it("Should return an error, because there was an error getting the image", async () => {
        let spy = jest.spyOn(GetBreedImageService.prototype, "get").mockImplementation(() => {
            throw new Error("Mock error")
        });
        const router = new Router();
        const httpResponse = await router.route({baseUrl: "/api", method: "GET"}, {
            body: {},
            headers: {},
            query: {},
            params: {}
        })
        expect(httpResponse).not.toBe(null);
        expect(httpResponse.statusCode).toBe(500);
        expect(httpResponse.data).toMatchObject({
            message: "Mock error",
            trace: undefined
        })
        spy.mockRestore()
    })

    it("Should return an error, because there was an error uploading the image", async () => {
        let spy = jest.spyOn(UploaderService.prototype, "upload").mockImplementation(() => {
            throw new Error("Mock error")
        });
        const router = new Router();
        const httpResponse = await router.route({baseUrl: "/api", method: "GET"}, {
            body: {},
            headers: {},
            query: {},
            params: {}
        })
        expect(httpResponse).not.toBe(null);
        expect(httpResponse.statusCode).toBe(500);
        expect(httpResponse.data).toMatchObject({
            message: "Mock error",
            trace: undefined
        })
        spy.mockRestore()
    })


    it("Should return an error, because there was an error saving the entity", async () => {
        let spy = jest.spyOn(BreedService.prototype, "save").mockImplementation(() => {
            throw new Error("Mock error")
        });
        const router = new Router();
        const httpResponse = await router.route({baseUrl: "/api", method: "GET"}, {
            body: {},
            headers: {},
            query: {},
            params: {}
        })
        expect(httpResponse).not.toBe(null);
        expect(httpResponse.statusCode).toBe(500);
        expect(httpResponse.data).toMatchObject({
            message: "Mock error",
            trace: undefined
        })
        spy.mockRestore()
    })

})