const express = require('express')

// import the new collection
const be_client = require('../models/health-model')

const {
    getAllPatients,
    getOnePatient,
    createPatient, 
    deletePatient,
    updatePatient
} = require('../controllers/patient-controller')

// const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

//require authentication for all routes
// router.use(requireAuth)

//GET all patients
router.get('/', getAllPatients)

//GET a single patient
router.get('/:id', getOnePatient)

//POST new patient
router.post('/', createPatient)

//DELETE a patient
router.delete('/:id', deletePatient)

//UPDATE a patient
router.patch('/:id', updatePatient)


module.exports = router