const authModel = require('../models/authModel');
const jwt = require('jsonwebtoken')

const {v4 : uuidV4} = require('uuid')
const bcrypt = require ("bcrypt");
const userModel = require('../models/userModel');
const config = require('../config.json')
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
    logIn : async(body)=> {
        try {
            const checkUserEmail = await userModel.getUserByEmail(body.email);
        
            if (!checkUserEmail || checkUserEmail.error || !checkUserEmail.response) {
                return {
                    response: "invalid email"
                };
            }
        
            const loginUser = await bcrypt.compare(body.password, checkUserEmail.response.dataValues.password);
        
            if (!loginUser) {
                return {
                    response: "wrong password"
                };
            }
        
            delete checkUserEmail.response.dataValues.password;
            const token = jwt.sign(checkUserEmail.response.dataValues , config.JWT_SECRET);
        
            return {
                response: token
            };
        
        } catch (error) {
            return {
                error: error.message
            };
        }
        
    }
   
}