const router = require('express').Router()
let CustomFieldData = require('../models/CustomFieldData.model')

// get all fields
router.route('/').get((req, res) => {
    CustomFieldData.find()
        .then(fieldData => res.json(fieldData))
        .catch(err => res.status(400).json('Error: ' + err))
})

// post new field
router.route('/new').post((req,res)=>{
    const fieldID = req.body.fieldID
    const objectID = req.body.objectID
    const value = req.body.value

    const newFieldData = new CustomFieldData({
        fieldID,
        objectID,
        value
    })

    newFieldData.save()
    .then(()=>res.json('Field data added!'))
    .catch(err=>res.status(400).json('Error: + err'))
})

// delete field by id
router.route('/:id').delete((req, res) => {
    CustomFieldData.findByIdAndDelete(req.params.id)
        .then(field => res.json('Field data deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router