require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const healthRoutes = require('./routes/health')
const doctorRoutes = require('./routes/doctor')
const consultRoutes = require('./routes/consult')
// const userRoutes = require('./routes/user')  FOR AUTHENTICATION


// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// routes in website
app.use('/portal/health', healthRoutes)
app.use('/portal/doctor', doctorRoutes)
app.use('/portal/consult', consultRoutes)
// app.use('/portal/user', userRoutes) FOR AUTHENTICATION


//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
    app.listen(process.env.PORT, () => {
    console.log('Connected to database and port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



