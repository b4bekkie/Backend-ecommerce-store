const sequelize = require('../../bin/dbconnection');


const {Model , DataTypes} = require('sequelize')

class CartItem extends Model {}

CartItem.init ( {

    cardItemId : {
        primaryKey : true,

        type : DataTypes.STRING(90)

    },
    cartItemName : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
   




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "CartItem"


});

module.exports = CartItem;