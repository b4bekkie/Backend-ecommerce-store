const sequelize = require('../../bin/dbconnection');


const {Model , DataTypes} = require('sequelize')

class OrderItem extends Model {}

OrderItem.init ( {

    orderItemId : {
        primaryKey : true,

        type : DataTypes.STRING(90)

    },
    orderItemName : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
   




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "OrderItem"


});

module.exports = OrderItem;