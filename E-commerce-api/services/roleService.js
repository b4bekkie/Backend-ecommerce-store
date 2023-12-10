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
        
 
     },

     deleteRole :async  (query)=>{
try {
    
    const deleteRole = await roleModel.deleteRole(query.roleId);
    if(deleteRole.error) {
        return {
            response : deleteRole.error
        }
    }
    return {
        response : deleteRole.response
    }
} catch (error) {
    return  {
        error : error.message

    }
    
}


    

     },
     getAllRoles :async()=> {
        try {

            const getAllroles = await roleModel.getAllroles();

            if(getAllroles.error) {
                return {
                    response : getAllroles.error
                }
            }
            return {
                response : getAllroles.response
            }
            
        } catch (error) {
            return {
                error : error.message
            }
            
        }
     },

    
     
  }
 