const router = require('express').router
let Student = reuiqre('../models/student.model')

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).josn('Error: ' + err))
})

router.route('/addStudent').post((req,res)=>{
    const name = req.body.name
    const newStudent = new Student({name})

    newStudent.save()
    .then(()=>res.json('Student added!'))
    .catch(err=>res.status(400).json('Error: + err'))
})

module.exports = router