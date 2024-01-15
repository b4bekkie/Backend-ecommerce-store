const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const { query } = require('express');

const { v4: uuidV4} = require('uuid');


module.exports = {


    createUser  : async(body)=> {

        try {

            const userId =  uuidV4()

            const userEmailCheck = await userModel.getUserByEmail(body.email)
            if(userEmailCheck.response || userEmailCheck.error) {
                return {
                    error  : "User Exists already with this Email"
                }
            }
            body.password = await bcrypt.hash(body.password,9)

            const createdUser  =  await userModel.createUser(userId,body.name,body.email,body.password)
            
          
            if(createdUser.error) {
                return {
                   response  : createdUser.error
                }
            }
            // delete createdUser.response.dataValues.password
            return {
                response : createdUser.response
            }


            
        } catch (error) {
            return {
                response : error.message
            }
        }
    },

    getAllUsers : () => {
        try {

            const users = userModel.getAllUsers();
            if(users.error) {
                return {
                    response : "no users exists"
                }
            }
            return {
                response : users.response
            }
            
        } catch (error) {
            
        }
    },  

   

    deleteUser :async  (query)=>{
        try {
            
            const deleteUser = await userModel.deleteUser(query.userId);
            if(deleteUser.error) {
                return {
                    response : deleteUser.error
                }
            }
            return {
                response : deleteUser.response
            }
        } catch (error) {
            return  {
                error : error.message
        
            }
            
        }
          },

          getRoleByUserId : async(body)=> {

                  try {
                    
            const getRoleOfUser =  await userModel.getRoleByUserId(body.userId)

            if(getRoleOfUser.error) {
                return {
                    response : getRoleOfUser.error
                }
            }
            return {
                response : getRoleOfUser.response
            }
    
} catch (error) {
    return {
        error : error.message
    }
    
}

          },

          updateUser  :async (body)=> {
         try {
            const updateUser = await userModel.updateUser(body.userId,body.name,body.email,body.password)


            if(updateUser.error) {
                 return {
                      response : updateUser.error
                }
            }
            return {
                response : updateUser.response
            }
         } catch (error) {
            return {
                error : error.message
            }
            
         }
          }
    
}