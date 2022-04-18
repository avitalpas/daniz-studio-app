const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    mobile: {
        type: String
    }
},{
    timestamps: true
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student