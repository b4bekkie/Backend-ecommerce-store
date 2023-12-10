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

    }
}