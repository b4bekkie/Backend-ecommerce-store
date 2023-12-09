const authModel = require('../models/authModel');

const {v4 : uuidV4} = require('uuid')
const bcrypt = require ("bcrypt");
const userModel = require('../models/userModel');
module.exports = {

    signUp : async (body)=> {

        try {
            const userId =  uuidV4()
            
                
           const password= await bcrypt.hash(body.password,10)
           const createdUser = await authModel.signup(userId,body.name,body.email,password);
            
        
  if(createdUser.error) {

    return {
        response  : createdUser.error
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


        const checkUserEmail = await userModel.getUserByEmail(body.email)
        if(!checkUserEmail.response || checkUserEmail.error) {
            return {
                response : "invalid email"
            }
        };



        const loginUser =await bcrypt.compare(body.password,checkUserEmail.response.dataValues.password);
        if(!loginUser) {
            return {
                response : "wrong password"
            }
        };
        return {
            response : "login successfully"
        }
        
      } catch (error) {
        return {
            error : error.message
        }
        
      }

            


           
        

    }
}