const router = require('express').Router()
let Student = require('../models/student.model')

// get all students
router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).josn('Error: ' + err))
})


// post new student
router.route('/new').post((req, res) => {
    const name = req.body.name
    const mobile = req.body.mobile

    const newStudent = new Student({ 
        name,
        mobile
     })

    newStudent.save()
        .then(() => res.json('Student added!'))
        .catch(err => res.status(400).json('Error: + err'))
})

// get student by id
router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err))
})

// delete student by id
router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(student => res.json('Student deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// update student by id
router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
        .then(student => {
            student.name = req.body.name
            student.mobile = req.body.mobile

            student.save()
                .then(() => res.json('Student updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router