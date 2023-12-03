const sequelize = require('../../bin/dbconnection');


const {Model , DataTypes} = require('sequelize')

class Product extends Model {}

Product.init ( {

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
modelName : "product"


});

module.exports = Product;