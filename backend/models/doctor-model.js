const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doctorSchema = new Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    mname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    specialization: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

// create new collection
module.exports = mongoose.model('be_doctor', doctorSchema)

