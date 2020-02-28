const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
const Customer =new mongoose.model('Customer', customerSchema)

module.exports = Customer