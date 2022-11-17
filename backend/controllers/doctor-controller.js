const doctorInfo = require('../models/doctor-model')
const mongoose = require('mongoose')

// get all doctors
const getAllDoctors = async (req, res) => {
    const docInfo = await doctorInfo.find({}).sort({createdAt: -1}) //sort by date

    res.status(200).json(docInfo)
}

// get a single doctor
const getOneDoctor = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: 'No record found!'})
    }

    const doctorinfo = await doctorInfo.findById(id)

    if (!doctorinfo) {
        return res.status(404).json({error: 'No record found!'}) // if no record found
    }

    res.status(200).json(doctorinfo)
}

// create a new doctor
const createDoctor = async (req, res) => 
{
    const {fname, mname, lname, gender, age, address, contact, specialization} = req.body

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
    if (!specialization) {
        emptyFields.push('specialization')
    }

    //Error Message for adding new form
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill all the fields', emptyFields})
    }


    // adding document to database
    try{
        const doctorinfo = await doctorInfo.create({fname, mname, lname, gender, age, address, contact, specialization})
        res.status(200).json(doctorinfo)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete doctor
const deleteDoctor = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No record found!'})
     }
 
     const doctorinfo = await doctorInfo.findOneAndDelete({_id: id})

     if (!doctorinfo) {
        return res.status(400).json({error: 'No record found!'}) // if no record found
    }

    res.status(200).json(doctorinfo)
 
}

// upadate doctor
const updateDoctor = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No record found!'})
     }

     const doctorinfo = await doctorInfo.findOneAndUpdate({_id: id}, {...req.body})

     if (!doctorinfo) {
        return res.status(400).json({error: 'No record found!'}) // if no record found
    }

    res.status(200).json(doctorinfo)
}



module.exports = {
    getAllDoctors,
    getOneDoctor,
    createDoctor, 
    deleteDoctor,
    updateDoctor
}