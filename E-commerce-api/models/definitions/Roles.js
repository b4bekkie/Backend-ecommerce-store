const sequelize = require('../../bin/dbconnection');


const {Model , DataTypes} = require('sequelize')

class Role extends Model {}

Role.init ( {

    roleId : {
        primaryKey : true,

        type : DataTypes.STRING(90)
        

    },
    roleName : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
   




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "Role"


});

module.exports = Role;