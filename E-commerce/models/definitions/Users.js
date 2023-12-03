const sequelize = require('../../bin/dbconnection');


const {Model , DataTypes} = require('sequelize')

class Users extends Model {}

Users.init ( {

    userId : {
        primaryKey : true,

        type : DataTypes.STRING(90)

    },
    name : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
    email : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
    password : {
        type : DataTypes.STRING(90),
        allowNull : false
    }




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "Users"


});

module.exports = Users