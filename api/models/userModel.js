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

            const allusers = await models.users.findAll()
            return {
                response : allusers
            }
            
        } catch (error) {
            return {
                error : error.message
            }
            
        }
    } ,

    deleteUser : async (query)=>  {

        const user = await models.users.destroy({
            where   : {
                userId :  query.userId
            }

        })
         return {
            response : user
         }
    },

    getRoleByUserId : async(userId) =>{



      try {
            const getRoleOfUser  = await models.users.findOne( {
                where: {
                    userId: userId,
                  },
                  attributes: {
                    exclude: ["createdAt", "updatedAt", "password", "deletedAt",],
                  },
                  include: {
                    model: models.roles,
                    attributes: {
                      exclude: ['roleId',"createdAt", "updatedAt", "deletedAt"],
                    },
                  },
        });
        return {
            response : getRoleOfUser
        }
      } catch (error) {
        return {
            error : error.message
        }
        
      }
    }   ,

    updateUser  :async (userId,name,email,password)=> 
    {
       try {
                        const updateUser = await models.users.update({
                            name,
                            email,
                            password


                        },{
                            where : {
                                userId  : userId
                                
                            }
                        })
                       

                        return {
                            response : updateUser
                        }
       } catch (error) {
        return {
            error : error.message
        }
        
       }
    }
}