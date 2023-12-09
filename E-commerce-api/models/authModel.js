const {models} = require('./index')


module.exports = {

    signup :  async(userId,name,email,password)=> {
            try {
                   const createdUser = await models.users.create({
                       userId,
                       name,
                       email,
                       password,
                      
                   });
                   
                  
              return {
                       response : createdUser
                   }
                   
             } catch (error) {
                   return {
                       error : error.message
                   }
                   
                  }
           
               },

               
    
    }