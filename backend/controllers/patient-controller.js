const patientInfo = require('../models/health-model')
const mongoose = require('mongoose')

// get all patients
const getAllPatients = async (req, res) => {
    // const user_id = req.user._id

    const info = await patientInfo.find({}).sort({createdAt: -1}) //sort by date
    // const info = await patientInfo.find({user_id}).sort({createdAt: -1}) //sort by date  FOR AUTHENTICATION

    res.status(200).json(info)
}

//COUNT DOCUMENT 
const getCount = async (req, res) => {

    // const query = { status: "Pending" };
    // const countPatient = await patientInfo.countDocuments(query); //FINDING CATEGORY
    
    const count = await patientInfo.estimatedDocumentCount();
    res.status(200).json({
      totalPatient: count
    });
  };


// get a single patient
const getOnePatient = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: 'No record found!'})
    }

    const patientinfo = await patientInfo.findById(id)

    if (!patientinfo) {
        return res.status(404).json({error: 'No record found!'}) // if no record found
    }

    res.status(200).json(patientinfo)
}

// create a new patient
const createPatient = async (req, res) => 
{
    const {fname, mname, lname, gender, age, address, contact} = req.body

    let emptyFields = []

    if (!fname) {
        emptyFields.push('fname')
    }
    if (!lname) {
        emptyFields.push('lname')
    }
    if (!mname) {
        emptyFields.push('mname')
    }
    if (!gender) {
        emptyFields.push('gender')
    }
    if (!age) {
        emptyFields.push('age')
    }
    if (!address) {
        emptyFields.push('address')
    }
    if (!contact) {
        emptyFields.push('contact')
    }

    //Error Message for adding new form
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill all the fields', emptyFields})
    }


    // adding document to database
    try{
        // const user_id = req.user._id   FOR AUTHENTICATION
        const patientinfo = await patientInfo.create({fname, mname, lname, gender, age, address, contact})
        // const patientinfo = await patientInfo.create({fname, mname, lname, gender, age, address, contact, user_id})
        res.status(200).json(patientinfo)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete patient
const deletePatient = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No record found!'})
     }
 
     const patientinfo = await patientInfo.findOneAndDelete({_id: id})

     if (!patientinfo) {
        return res.status(400).json({error: 'No record found!'}) // if no record found
    }

    res.status(200).json(patientinfo)
 
}

// upadate patient
const updatePatient = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No record found!'})
     }

     const patientinfo = await patientInfo.findOneAndUpdate({_id: id}, {...req.body})

     if (!patientinfo) {
        return res.status(400).json({error: 'No record found!'}) // if no record found
    }

    res.status(200).json(patientinfo)
}

module.exports = {
    getAllPatients,
    getOnePatient,
    createPatient, 
    deletePatient,
    updatePatient,
    getCount
}