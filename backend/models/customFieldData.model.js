const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customFieldDataSchema = new Schema({
    fieldID: {type: String, required: true},
    objectID: {type: String, required: true},
    value: {type: String, required: true},
},{
    timestamps: true
})

const CustomFieldData = mongoose.model('CustomFieldData', customFieldDataSchema)

module.exports = CustomFieldData