const sequelize = require('../../bin/dbconnection');


const {Model , DataTypes} = require('sequelize')

class Product extends Model {}

Product.init ( {

    productId : {
        primaryKey : true,

        type : DataTypes.STRING(90)

    },
    productName : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
    productDescription :  {
        type : DataTypes.STRING(250),
        allowNull : false
    }
   




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "product"


});

module.exports = Product;