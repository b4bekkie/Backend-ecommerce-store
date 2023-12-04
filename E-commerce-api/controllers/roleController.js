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
                   res.send({response : createdRole.error})
                
            }
            res.send(createdRole.response)
            
            
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    }
}