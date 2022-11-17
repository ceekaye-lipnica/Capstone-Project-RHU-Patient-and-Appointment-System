const mongoose = require('mongoose')
const Schema = mongoose.Schema

const consultSchema = new Schema({
    purpose: String,
    diagnosis: String, 
    description: String, 
    treatment: String,
    bp: String,
    weight: String,
    height: String,
    bloodsugar: String,
    attendingDoc: {
        type: String, 
        trim: true
    }
}, { timestamps: true })

// create new collection
module.exports = mongoose.model('BE_diagnosis', consultSchema)

