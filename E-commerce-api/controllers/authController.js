const authService = require('../services/authService');

const joi = require('joi')

const createUserSchema = joi.object().keys({
   
   
   
   
    roleId: joi.string().required() ,
    name : joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string(),
})



module.exports = {
    

    signUp  :async (req,res) => {

        try {
            const validate = createUserSchema.validateAsync(req.body)
            const createUser = await authService.signUp(validate)
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
        return res.send({response : logInUser.response})
    }
    
}