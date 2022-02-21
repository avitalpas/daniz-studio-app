const router = require('express').Router()
let User = require('../models/User.model')

// get all Users
router.route('/').get((req, res) => {
    User.find()
        .then(Users => res.json(Users))
        .catch(err => res.status(400).josn('Error: ' + err))
})


// post new User
router.route('/new').post((req, res) => {
    const name = req.body.name
    const email = req.body.email

    const newUser = new User({ 
        name,
        email
     })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: + err'))
})

// get User by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(User => res.json(User))
        .catch(err => res.status(400).json('Error: ' + err))
})

// delete User by id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(User => res.json('User deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// update User by id
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(User => {
            User.name = req.body.name
            User.email = req.body.email

            User.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router