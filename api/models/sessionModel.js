const { models } = require('./index')


module.exports  = {

    createSession :async (sessionId,token,userId) => {
        

        try {
            const createSession = await models.sessions.create({
               
                sessionId,
                token,
                userId
              
                
            })
           
            return {
                response : createSession
            }
        } catch (error) {
          return {
            error: "Error creating session: " + error.message
          }
            
        }

    },
    findSessionByuserId :async (userId) => {
        

        try {
            const findSessionByuserId = await models.sessions.findOne({
               
                
                where : {
                   userId :userId
                }
              
                
            })
           
            return {
                response : findSessionByuserId
            }
        } catch (error) {
          return {
            error: "Error creating session: " + error.message
          }
            
        }

    },
    deleteSession :async (userId) => {
        

        try {
            const deleteSession = await models.sessions.destroy({
               
               where  : {
                userId :userId
               }
               
              
         
            })
           
            return {
                response : deleteSession
            }
        } catch (error) {
          return {
            error: "Error creating session: " + error.message
          }
            
        }

    },
    
   
     
}