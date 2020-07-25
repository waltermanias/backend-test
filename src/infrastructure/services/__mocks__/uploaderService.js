
class UploaderService {
    async upload({key, buffer}) {
        return {Location: `http://localhost:1000/${key}`}
    }

    async remove(key) {
    }
}

module.exports = UploaderService