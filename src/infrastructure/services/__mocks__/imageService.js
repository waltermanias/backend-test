const fs = require('fs')
const path = require('path')
class ImageService {

    async get(url) {
        const filename = path.resolve(__dirname, 'n02112137_6808.jpg')
        return fs.readFileSync(filename)
    }

}

module.exports = ImageService