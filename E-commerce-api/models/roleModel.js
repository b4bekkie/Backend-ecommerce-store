const {models} = require('./index')


module.exports = {

    createRole  : async (roleId,roleName)=> {
        try {

            const createdRole = await models.roles.create({
                roleId,
                roleName

            })
            return {
                response : createdRole
            }
            
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    }
}