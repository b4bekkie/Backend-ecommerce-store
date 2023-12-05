const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')

const { v4: uuidV4} = require('uuid');


module.exports = {


    createUser  : async(body)=> {

        try {

            const userId =  uuidV4()

            const userEmailCheck = await userModel.getUserByEmail(body.email)
            if(userEmailCheck.response || userEmailCheck.error) {
                return {
                    error  : "invalid credtianls"
                }
            }
            body.password = await bcrypt.hash(body.password,9)

            const createdUser  =  await userModel.createUser(userId,body.roleId,body.name,body.email,body.password)
            
          
            if(createdUser.error) {
                return {
                   response  : createdUser.error
                }
            }
            delete createdUser.response.dataValues.password
            return {
                response : createdUser.response
            }


            
        } catch (error) {
            return {
                response : error.message
            }
        }
    }
}