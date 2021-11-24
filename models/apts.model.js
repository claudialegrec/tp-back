const mongoose = require('mongoose')
const { Schema } = mongoose

const Apt = new Schema({
    service: String,
    client_name:String,
    date:String,
    turn:String
})

module.exports = mongoose.model('Apt', Apt)