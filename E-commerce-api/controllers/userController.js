const userService = require('../services/userService');

const joi = require('joi');

const createUserSchema = joi.object().keys({
   
   
   
   
    roleId: joi.string().required(),
    name : joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string(),
   
   


})


module.exports = {
    createUser : async( req,res)=> {

    try {

        const validate =  await createUserSchema.validateAsync(req.body)
        const createdUser = await userService.createUser(validate)
        if(createdUser.error) {
           
           res.send(  {response : createdUser.error})
            
        }
        res.send(  {response : createdUser.response})
            
    } catch (error) {
        return {
            error : error.message
        }
    }
    }
}