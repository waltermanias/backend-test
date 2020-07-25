const ObjectID = require('bson-objectid');

class BreedsService {

    constructor() {
        this.breeds = []
    }

    async save(entity) {
        const newBreed = {...entity, _id: ObjectID()};
        this.breeds.push(newBreed);
        return JSON.parse(JSON.stringify(newBreed));
    }

    async getById(id) {
        const breed = this.breeds.filter(b => b._id === id)
        if (!breed) return null
        return JSON.parse(JSON.stringify(breed));
    }

    async get() {
        return this.breeds;
    }

    async remove(id) {
        this.breeds = this.breeds.map(b => b._id !== id)
    }

}

module.exports = BreedsService