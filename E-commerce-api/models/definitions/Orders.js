const sequelize = require('../../bin/dbconnection');


const {Model , DataTypes} = require('sequelize')

class Order extends Model {}

Order.init ( {

    orderId : {
        primaryKey : true,

        type : DataTypes.STRING(90)

    },
    orderName : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
   




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "Order"


});

module.exports = Order;