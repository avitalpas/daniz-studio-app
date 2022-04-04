const mongoose = require('mongoose')

const Schema = mongoose.Schema

const uploadSchema = new Schema({
    name: {
        type: String,
        require: true
    }
},{
    timestamps: true
})

const Upload = mongoose.model('Upload', uploadSchema)

module.exports = Upload