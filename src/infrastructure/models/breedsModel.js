const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    location: String,
    uploadedAt: Date
}, {versionKey: false})

module.exports = mongoose.model("breeds", schema)