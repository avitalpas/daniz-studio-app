const router = require('express').Router()
let Lesson = require('../models/lesson.model')

// get all lessons
router.route('/').get((req, res) => {
    Lesson.find()
        .then(lessons => res.json(lessons))
        .catch(err => res.status(400).josn('Error: ' + err))
})

// post new lesson
router.route('/newLesson').post((req,res)=>{
    const studentID = req.body.studentID
    const description = req.body.description
    const date = Date.parse(req.body.date)

    const newLesson = new Lesson({
        studentID,
        description,
        date
    })

    newLesson.save()
    .then(()=>res.json('Lesson added!'))
    .catch(err=>res.status(400).json('Error: + err'))
})

// delete lesson by id
router.route('/:id').delete((req, res) => {
    Lesson.findByIdAndDelete(req.params.id)
        .then(lesson => res.json('Lesson deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router