const authModel = require('../models/authModel');
const jwt = require('jsonwebtoken')

const {v4 : uuidV4} = require('uuid')
const bcrypt = require ("bcrypt");
const userModel = require('../models/userModel');
const config = require('../config.json');
const sessionModel = require('../models/sessionModel');
module.exports = {

    signUp : async (body)=> {

        try {
           
           
            const userEmailCheck = await userModel.getUserByEmail(body.email)
            if(userEmailCheck.response || userEmailCheck.error) {
                return {
                    error  : "User already Exists  with this Email"
                }
            }
           
            const userId =  uuidV4()
            
                
           const password= await bcrypt.hash(body.password,10)
           const createdUser = await authModel.signup(body.roleId,userId,body.name,body.email,password);
            
        
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


            const findsession = await sessionModel.findSessionByuserId(checkUserEmail.response.dataValues.userId)
            if(findsession) {

                await sessionModel.deleteSession(checkUserEmail.response.dataValues.userId)
            }

            console.log(findsession)
            


            const sessionId = uuidV4()

            const createSession = await sessionModel.createSession(
                sessionId,
                token,
                checkUserEmail.response.dataValues.userId
                
            );
          
            
        
            

                if(createSession.error || !createSession.response) {
                    return {
                        error : "unable to login"
                    }
                }
        
            return {
                response: createSession.response
            };
        
        } catch (error) {
            return {
                error: error.message
            };
        }
        
    }
   
}