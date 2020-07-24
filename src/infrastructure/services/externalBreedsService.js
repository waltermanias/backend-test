const config = require('config');
const axios = require('axios');

class ExternalBreedsService {

    async random() {
        const endpoint = config.get('targetApi');
        const response = await axios.get(endpoint);
        return response.data;
    }

}

module.exports = ExternalBreedsService