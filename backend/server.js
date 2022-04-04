const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const { GridFsStorage } = require('multer-gridfs-storage')
const grid = require('gridfs-stream')
const methodOverride = require('method-override')
const crypto = require('crypto')
const router = require('express').Router()
let Upload = require('./models/Upload.model')

// require dotenv
require('dotenv').config()

// create app via express
const app = express()

// set port to 5000
const port = process.env.PORT || 5000

// all app use
app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))

// MongoDB uri connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection

// test connection
connection.once('open', () => {
    console.log('MongoDB database connection astablished successfully');
})


// routers
const lessonsRouter = require('./routes/lessons.back.route')
const studentsRouter = require('./routes/students.back.route')
const usersRouter = require('./routes/users.back.route')
const musicRouter = require('./routes/music.back.route')
const customFieldRouter = require('./routes/CustomField.back.route')
const customFieldDataRouter = require('./routes/customFieldData.back.route')

app.use('/lessons', lessonsRouter)
app.use('/students', studentsRouter)
app.use('/users', usersRouter)
app.use('/musics', musicRouter)
app.use('/customfield', customFieldRouter)
app.use('/customfielddata', customFieldDataRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
