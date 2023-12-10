const {models} = require('./index')


module.exports = {

    createRole  : async (roleId,roleName)=> {
        try {

            const createdRole = await models.roles.create({
                roleId : roleId,
                roleName : roleName

            })
            return {
                response : createdRole
            }
            
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    },

    deleteRole : async (roleId)=>  {

        const deleteRole = await models.roles.destroy({
            where   : {
                roleId :  roleId
            }

        })
         return {
            response : deleteRole
         }
    },

    getAllroles :async ()=> {

       try {
        const getAllroles = await models.roles.findAll();

        return {
            response : getAllroles
        }
       } catch (error) {

        return {
            error  : error.message
        }
        
       }
    },
   
}