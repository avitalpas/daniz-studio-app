const router = require('express').Router()
let Music = require('../models/music.model')

// get all musics
router.route('/').get((req, res) => {
    Music.find()
        .then(musics => res.json(musics))
        .catch(err => res.status(400).josn('Error: ' + err))
})

// post new music
router.route('/new').post((req,res)=>{
    console.log(`req: ${JSON.stringify(req.body)}`);

    const newMusic = new Music({
        name: req.body.name,
        difficulty: req.body.difficulty
    })

    newMusic.save()
    .then(()=>res.json('Music added!'))
    .catch(err=>res.status(400).json('Error: + err'))
})


// delete music by id
router.route('/:id').delete((req, res) => {
    Music.findByIdAndDelete(req.params.id)
        .then(music => res.json('Music deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router