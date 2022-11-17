const express = require('express')

// import the new collection
const BE_diagnosis = require('../models/consult-model')

const {
    getAllConsult,
    getOneConsult,
    createConsult, 
    deleteConsult,
    updateConsult
} = require('../controllers/consult-controller')


const router = express.Router()

//GET all consult
router.get('/', getAllConsult)

//GET a single consult
router.get('/:id', getOneConsult)

//POST new consult
router.post('/', createConsult)

//DELETE a consult
router.delete('/:id', deleteConsult)

//UPDATE a consult
router.patch('/:id', updateConsult)


module.exports = router