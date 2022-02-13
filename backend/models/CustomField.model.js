const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customFieldSchema = new Schema({
    forModel: {type: String, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
    options: []
},{
    timestamps: true
})

const CustomField = mongoose.model('CustomField', customFieldSchema)

module.exports = CustomField