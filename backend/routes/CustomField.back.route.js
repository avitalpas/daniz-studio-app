const router = require('express').Router()
let CustomField = require('../models/CustomField.model')

// get all fields
router.route('/').get((req, res) => {
    CustomField.find()
        .then(field => res.json(field))
        .catch(err => res.status(400).json('Error: ' + err))
})

// post new field
router.route('/new').post((req,res)=>{
    const forModel = req.body.forModel
    const name = req.body.name
    const type = req.body.type
    const options = req.body.options

    const newField = new CustomField({
        forModel,
        name,
        type,
        options
    })

    newField.save()
    .then(()=>res.json('Field added!'))
    .catch(err=>res.status(400).json('Error: + err'))
})

// delete field by id
router.route('/:id').delete((req, res) => {
    CustomField.findByIdAndDelete(req.params.id)
        .then(field => res.json('Field deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router