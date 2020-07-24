const axios = require('axios');

class ImageService {

    async get(url) {
        const response = await axios.get(url, {responseType: "arraybuffer"});
        return response.data;
    }

}

module.exports = ImageService