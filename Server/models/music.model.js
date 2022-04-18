const mongoose = require('mongoose')

const Schema = mongoose.Schema

const musicSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    difficulty: {
        type: String,
        require: true
    }
},{
    timestamps: true
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music