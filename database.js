const mongoose = require('mongoose');
const config = require('config');

module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(config.mongoUri, {useNewUrlParser: true, dbName: "breeds", useUnifiedTopology: true}, err => {
            if (err) {
                reject(err)
            } else {
                console.log("Connected with database...")
                resolve();
            }
        })
    })
}