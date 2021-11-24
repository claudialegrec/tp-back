const mongoose = require('mongoose')
const { Schema } = mongoose

const Apt = new Schema({
    service: String,
    client_name: String,
    cleint_ap1: String,
    cleint_ap2: String,
    date: String,
    time: String
})

module.exports = mongoose.model('Apt', Apt)