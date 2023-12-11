const userModel = require('../models/userModel');
const authService = require('../services/authService');



const joi = require('joi')

// const createUserSchema = joi.object().keys({
   
   
   
   
  
//     name : joi.string().required(),
//     email: joi.string().email().required(),
//     password: joi.string().required(),
// })



module.exports = {
    

    signUp  :async (req,res) => {

        try {
            // const validate =await createUserSchema.validateAsync(req.body)

           
            const createUser = await authService.signUp(req.body)
            if(createUser.error) {
                return res.send({response : createUser.error})
            }
            return res.send({response : createUser.response})
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    },

    logIn : async(req,res)=>{

        const logInUser = await authService.logIn(req.body)
        if(logInUser.error) {
            
           return res.send( {response : logInUser.error})     
            
        }

        const cookie = {
            token : logInUser.response
        }
        res.cookie('token',cookie,{ secure: true, httpOnly: true })
        return res.send({response : logInUser.response})

       

        
    },
   
    
}