import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

// Step 1: Setup server side

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRoutes)

// Step 2: setup mongodb cloud atlas
// host db on mongodb cloud

const CONNECTION_URL = 'mongodb+srv://pxsama:93XPy1229@cluster0.lbyyi.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5002;

// Use mongoose to connecto to database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)






