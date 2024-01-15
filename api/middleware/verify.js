const jwt = require('jsonwebtoken');
const sessionModel = require('../models/sessionModel');
const userModel = require('../models/userModel');
const config = require('../config.json');

module.exports = {
    admin: async (req, res, next) => {
        const token = req.cookies.token.token.token;
        jwt.verify(token, config.JWT_SECRET, async (error, data) => {
            if (error) {
                return res.send({ error: "Invalid Token" });
            }

            const session = await sessionModel.findSessionByuserId(data.userId);
            if (session.error) {
                return res.send({ error: "Invalid Session" });
            }

            const role = await userModel.getRoleByUserId(data.userId);
            if (role.error) {
                return res.send({ error: "Invalid Role" });
           }
         
      
          
        if (role.response.dataValues.Role.dataValues.roleName !== "admin") {
            return res.send({ error: "You are not Admin Bitch" }); }
            next();
            
           
        });
        
    },
    customer: async (req, res, next) => {
        const token = req.cookies.token.token.token;
        jwt.verify(token, config.JWT_SECRET, async (error, data) => {
            if (error) {
                return res.send({ error: "Invalid request" });
            }

            const session = await sessionModel.findSessionByuserId(data.userId);
            if (session.error) {
                return res.send({ error: "Invalid request" });
            }

            const role = await userModel.getRoleByUserId(data.userId);
            if (role.error) {
                return res.send({ error: "Invalid request" });
           }
         
      
          
        if (role.response.dataValues.Role.dataValues.roleName !== "Customer") {
            return res.send({ error: "Invalid request" }); }
            next();
            
           
        });
        
    }
};
