const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lessonSchema = new Schema({
    studentID: {type: String, required: true},
    musicID: {type: String, required: true},
    description: {type: String},
    date: {type: Date, required: true}
},{
    timestamps: true
})

const Lesson = mongoose.model('Lesson', lessonSchema)

module.exports = Lesson