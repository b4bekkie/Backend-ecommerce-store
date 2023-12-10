const sequelize = require('../../bin/dbconnection');


const { Model , DataTypes} = require('sequelize')

class Session extends Model {}

Session.init ( {

    sessionId : {
        primaryKey : true,

        type : DataTypes.STRING(255),
         
        },
    token : {
        type : DataTypes.STRING(999),
        allowNull : false,
    }
   




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "Session"


});

module.exports = Session;