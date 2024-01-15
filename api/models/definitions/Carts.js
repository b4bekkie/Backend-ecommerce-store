const sequelize = require('../../bin/dbconnection');


const {Model , DataTypes} = require('sequelize')

class Cart extends Model {}

Cart.init ( {

    cartId : {
        primaryKey : true,

        type : DataTypes.STRING(90)

    },
    cartName : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
   




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "Cart"


});

module.exports = Cart;