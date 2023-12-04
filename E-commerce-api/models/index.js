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
Users.hasOne(Cart,{foreignKey : "userId"})
Cart.belongsTo(Users,{foreignKey : "userId"})

//////////1:N (one-many)
//user-product
Users.hasMany(Product,{foreignKey : "userId"})
Product.belongsTo(Users , {foreignKey : "userId"})
//user-role
 Users.hasMany(Role , {foreignKey : "userId"})
 Role.belongsTo(Users , {foreignKey : "userId"})

 //product-variation

 Product.hasMany(Variation , {foreignKey : "productId"})
 Variation.belongsTo(Product , {foreignKey : "productId"})

 //cart-cartItems
 Cart.hasMany(CartItem , {foreignKey : "cartId"})
 CartItem.belongsTo(Cart , {foreignKey : "cartId"})
 

 //order-orderItem
 Order.hasMany(OrderItem , {foreignKey : "orderId"})
 OrderItem.belongsTo(Cart , {foreignKey : "orderId"})


 //variation-cartItems
 Variation.hasMany(CartItem , {foreignKey : "variationId"})
 CartItem.belongsTo(Variation , {foreignKey : "orderId"})




module.exports = {models,db}