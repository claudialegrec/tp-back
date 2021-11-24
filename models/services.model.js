const mongoose = require('mongoose')
const { Schema } = mongoose

const Service = new Schema({
    title: String,
    description: String
})

module.exports = mongoose.model('Service', Service)