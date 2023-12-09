const {models} = require('./index')


module.exports = {

    signup :  async(userId,name,email,password)=> {
            try {
                   const createdUser = await models.users.create({
                       userId,name,email,password
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

               logIn : async(email,password)=> {
                try {

                    const  logIn = await models.users.findOne({
                        where : {
                            email  : email,
                            password : password
                        }
                    })
                    return {
                        response : logIn
                    }
                    
                } catch (error) {
                    return {
                        error : error.message
                    }
                    
                }
               }
    
    }