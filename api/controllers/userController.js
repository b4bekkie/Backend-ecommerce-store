const userModel = require('../models/userModel');
const userService = require('../services/userService');

const joi = require('joi');

const createUserSchema = joi.object().keys({
    roleId: joi.string().required(),
    name : joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string(),
})
const getByIdSchema = joi.object().keys({
    userId: joi.string().required(),
  });


module.exports = {
    createUser : async( req,res)=> {

    try {

        const validate =  await createUserSchema.validateAsync(req.body)
        const createdUser = await userService.createUser(validate)
        if(createdUser.error) {
           
           res.send(  {response : createdUser.error})
            
        }
       return( res.send(  {response : createdUser.response}) )
            
    } catch (error) {
        return {
            error : error.message
        }
    }
    },

    getAllUsers : async (req,res)=>{

        try {

            const allUsers = await userModel.getAllUsers();
            if(allUsers.error) {
                return ({response : allUsers.error})
            }
            return (res.send({response : allUsers.response}))
            
        } catch (error) {
            return {
                error : error.message
            }
        }

    },
    deleteUser : async (req,res)=> {

      try { 
          const deleteUser = await userModel.deleteUser(req.query);
          if(deleteUser.error){
          return res.send({response : deleteUser.error})
          }
          return res.send({response : deleteUser.response})

      } catch (error) {
          return {
              error : error.message
          }
          
      }
  },

  getRoleByUserId : async (req,res)=>{

      try {

          const roleOfUser = await userService.getRoleByUserId(req.body);
          if(roleOfUser.error) {
              return ({response : roleOfUser.error})
          }
          return (res.send({response : roleOfUser.response}))
          
      } catch (error) {
          return {
              error : error.message
          }
      }

  },

  updateUser :async (req,res)=> {
    try {
        const updateUser = await userService.updateUser(req.body) 

        if (updateUser.error)  {
            return res.send({response : updateUser.error})
        }
        return res.send( {response : updateUser.response})
    } catch (error) {
        return {
            error : error.message
        }
    }
  }
}