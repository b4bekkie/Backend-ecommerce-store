const roleService = require('../services/roleService');
const joi = require('joi');


const roleSchema = joi.object().keys({
    roleName : joi.string().required()
})

module.exports = {

    createRole :  async(req,res)=> {

        try {

            const  validate = await roleSchema.validateAsync(req.body);
            const createdRole = await roleService.createRole(validate)
            if(createdRole.error) {
                     return      res.send({response : createdRole.error})
                
            }
                    return res.send(createdRole.response)
            
            
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    },

    deleteRole : async (req,res)=> {

        try { 
            const deleteRole = await roleService.deleteRole(req.query);
            if(deleteRole.error){
            return res.send({response : deleteRole.error})
            }
            return res.send({response : deleteRole.response})

        } catch (error) {
            return {
                error : error.message
            }
            
        }
    },
    getAllRoles :async (req,res) => {
        try {
            const getAllRoles = await roleService.getAllRoles()
            if(getAllRoles.error) {
                return res.send({response : getAllRoles.error})
            }
            return  res.send({response : getAllRoles.response}) 
            
        } catch (error) {
            return {
                error : error.message
            }
        }
    },

    
}