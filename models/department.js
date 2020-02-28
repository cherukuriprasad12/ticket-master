const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
const Department= new mongoose.model('Department',departmentSchema)

module.exports=Department