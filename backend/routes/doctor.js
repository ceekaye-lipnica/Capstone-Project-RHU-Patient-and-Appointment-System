const express = require('express')

// import the new collection
const be_doctor = require('../models/doctor-model')

const {
    getAllDoctors,
    getOneDoctor,
    createDoctor, 
    deleteDoctor,
    updateDoctor
} = require('../controllers/doctor-controller')


const router = express.Router()

//GET all doctor
router.get('/', getAllDoctors)

//GET a single doctor
router.get('/:id', getOneDoctor)

//POST new doctor
router.post('/', createDoctor)

//DELETE a doctor
router.delete('/:id', deleteDoctor)

//UPDATE a doctor
router.patch('/:id', updateDoctor)


module.exports = router