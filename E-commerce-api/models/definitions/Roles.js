const sequelize = require('../../bin/dbconnection');


const { Model , DataTypes} = require('sequelize')

class Role extends Model {}

Role.init ( {

    roleId : {
        primaryKey : true,

        type : DataTypes.STRING(255),
         defaultValue : "effe8f51-228b-4c04-926a-3f8bf61662c8"
        },
    roleName : {
        type : DataTypes.STRING(90),
        allowNull : false,
        defaultValue : "Customer"
    },
   




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "Role"


});

module.exports = Role;