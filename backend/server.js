const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection astablished successfully');
})

const lessonsRouter = require('./routes/lessons.back.route')
const studentsRouter = require('./routes/students.back.route')
const musicRouter = require('./routes/music.back.route')

app.use('/lessons', lessonsRouter)
app.use('/students', studentsRouter)
app.use('/musics', musicRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})