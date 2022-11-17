// const be_portal= require('../models/userModel')
// const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}


// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await be_portal.login(email, password)
    
            // create a token 
            const token = createToken(user._id)
    
            res.status(200).json({email, token})
    
       } catch (error) {
            
            res.status(400).json({error: error.message})
       }
}

// sign up user 
const signupUser = async (req, res) => {
   const {email, password} = req.body

   try {
    const user = await be_portal.signup(email, password)

        // create a token 
        const token = createToken(user._id)

        res.status(200).json({email, token})

   } catch (error) {
        
        res.status(400).json({error: error.message})
   }

}

module.exports = { signupUser, loginUser }