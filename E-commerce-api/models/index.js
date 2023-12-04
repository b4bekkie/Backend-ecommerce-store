const sequelize = require('../bin/dbconnection');

const Users = require('./definitions/Users')

const Cart= require('./definitions/Carts')
const Product = require('./definitions/Products')
const CartItem = require('./definitions/CartItem')
const Variation = require('./definitions/Variations')
const Role = require('./definitions/Roles')
const Order = require('./definitions/Orders')
const OrderItem = require("./definitions/OrderItem")

const models = {Users,Product,CartItem,Cart,Variation,Role,Order,OrderItem};

const db = {}; 


db.sequelize = sequelize;
sequelize.models = models;


///////////////////////relationship in tables
///////////1:1 
//user-cart


//////////1:N (one-many)
//user-product
Users.hasMany(Product,{foreignKey : "userId"})
Product.belongsTo(Users , {foreignKey : "userId"})
//user-role
Role.hasMany(Users, { foreignKey: 'roleId' });
Users.belongsTo(Role, { foreignKey: 'roleId' });

 






module.exports = {models,db}