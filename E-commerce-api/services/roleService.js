const roleModel = require('../models/roleModel');
const { v4: uuidv4} = require('uuid')


    
  module.exports = {
    createRole : async (body)=> {

        try {
         const roleId = uuidv4();
         const createdRole = await roleModel.createRole(roleId,body.roleName)
         if(createdRole.error) {
             return {
                 response : createdRole.error
             }
         }
         return {
             response : createdRole.response
 
         }
 
        } catch (error) {
         return {
             error : error.message
         }
         
        }
        
 
     }
  }
 