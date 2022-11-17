const consultInfo = require('../models/consult-model') //doctorInfo
const mongoose = require('mongoose')

// get all consult
const getAllConsult = async (req, res) => {
    const conInfo = await consultInfo.find({}).sort({createdAt: -1}) //sort by date  //docInfo

    res.status(200).json(conInfo)
}

// get a single consult
const getOneConsult = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: 'No record found!'})
    }

    const consultinfo = await consultInfo.findById(id) 

    if (!consultinfo) {
        return res.status(404).json({error: 'No record found!'}) // if no record found
    }

    res.status(200).json(consultinfo)
}

// create a new consult
const createConsult = async (req, res) => 
{
    const {purpose, diagnosis, description, treatment, bp, weight, height, bloodsugar, attendingDoc} = req.body

    // let emptyFields = []

    // if (!diagnosis) {
    //     emptyFields.push('diagnosis')
    // }
    // if (!description) {
    //     emptyFields.push('description')
    // }
    // if (!treatment) {
    //     emptyFields.push('treatment')
    // }
    // if (!bp) {
    //     emptyFields.push('bp')
    // }
    // if (!weight) {
    //     emptyFields.push('weight')
    // }
    // if (!attendingDoc) {
    //     emptyFields.push('attendingDoc')
    // }

    //Error Message for adding new form
    // if (emptyFields.length > 0) {
    //     return res.status(400).json({error: 'Please fill all the fields', emptyFields})
    // }


    // adding document to database
    try{
        const consultinfo = await consultInfo.create({purpose, diagnosis, description, treatment, bp, weight, height, bloodsugar, attendingDoc})
        res.status(200).json(consultinfo)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete consult
const deleteConsult = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No record found!'})
     }
 
     const consultinfo = await consultInfo.findOneAndDelete({_id: id})

     if (!consultinfo) {
        return res.status(400).json({error: 'No record found!'}) // if no record found
    }

    res.status(200).json(consultinfo)
 
}

// upadate consult
const updateConsult = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No record found!'})
     }

     const consultinfo = await consultInfo.findOneAndUpdate({_id: id}, {...req.body})

     if (!consultinfo) {
        return res.status(400).json({error: 'No record found!'}) // if no record found
    }

    res.status(200).json(consultinfo)
}



module.exports = {
    getAllConsult,
    getOneConsult,
    createConsult, 
    deleteConsult,
    updateConsult
}