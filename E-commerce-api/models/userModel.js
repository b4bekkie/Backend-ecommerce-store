const {models} = require('./index');



module.exports = {

           
    createUser : async(userId,roleId,name,email,password)=> {
 try {
        const createdUser = await models.users.create({
            userId,roleId,name,email,password
        });
        console.log(userId)
       
   return {
            response : createdUser
        }
        
  } catch (error) {
        return {
            error : error.message
        }
        
       }

    },

    getUserByEmail : async (email) => {
        try {

            const userEmailcheck = await models.users.findOne({
                where : {
                    email : email
                }
            })
            return {
                response : userEmailcheck,
            }
            
        } catch (error) {
            return {
                error : error
            }
            
        }
    } ,
    getAllUsers :  async()=> {
        try {

            const users = await models.users.findAll()
            return {
                response : users
            }
            
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    }
}