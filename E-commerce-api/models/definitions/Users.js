const sequelize = require('../../bin/dbconnection');

const cart = require('../definitions/Carts')

const {v4 : uuidV4} = require('uuid')


const {Model , DataTypes} = require('sequelize')

class Users extends Model {}

Users.init ( {

    userId : {
        primaryKey : true,

        type : DataTypes.STRING(255)

    },
    name : {
        type : DataTypes.STRING(255),
        allowNull : false,
        
    },
    email : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    password : {
        type : DataTypes.STRING(255),
        allowNull : false
    }





}, 
   
{
sequelize,
timestamps : true,
paranoid : true,
modelName : "Users",
hooks : {
    afterCreate : async(Users) => {
      await cart.create({
        userId : Users.dataValues.userId,
        cartId : uuidV4(),
        cartName : Users.dataValues.name  +"Cart"
      })
    }
}



});

module.exports = Users