const authModel = require('../models/authModel');

const {v4 : uuidV4} = require('uuid')
module.exports = {

    signUp : async (body)=> {

        try {
            const userId = uuidV4()
        const createdUser = await authModel.signup(userId,body.name,body.email,body.password);
  if(createdUser.error) {

    return {
        response  : error.message
    }
  }
  return {
    response : createdUser.response
  }

        } catch (error) {
            return {
                error : error.message
            }
            
        }

        
    },
    logIn :async (body) =>{

        try {
            const logInUser = await authModel.logIn(body.email,body.password);
            if(logInUser.error) {
                return {
                    response : logInUser.error || "wrong credentials"
                }
            }
            return {
                response : logInUser.response
            }
        } catch (error) {
            return {
                error : error.message
            }
            
        }

    }
}