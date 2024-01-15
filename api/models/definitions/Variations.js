const sequelize = require('../../bin/dbconnection');


const {Model , DataTypes} = require('sequelize')

class Variation extends Model {}

Variation.init ( {

    variationId : {
        primaryKey : true,

        type : DataTypes.STRING(90)

    },
    size : {
        type : DataTypes.STRING(90),
        allowNull : false
    },
   




},{
sequelize,
timestamps : true,
paranoid : true,
modelName : "Variation"


});

module.exports = Variation;