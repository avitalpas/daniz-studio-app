const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User