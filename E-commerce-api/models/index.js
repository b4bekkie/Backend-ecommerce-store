const sequelize = require('../bin/dbconnection');

const users = require('./definitions/Users')

const carts= require('./definitions/Carts')
const products = require('./definitions/Products')
const cartItems = require('./definitions/CartItem')
const productVariations = require('./definitions/Variations')
const roles = require('./definitions/Roles')
const orders = require('./definitions/Orders')
const orderItems = require("./definitions/OrderItem")
const sessions = require("./definitions/session")

const models = {users,products,cartItems,carts,productVariations,roles,orders,orderItems,sessions};

const db = {}; 


db.sequelize = sequelize;
sequelize.models = models;



users.hasMany(orders, { foreignKey: "userId" });
orders.belongsTo(users, { foreignKey: "userId" });

//user-product 1:M
users.hasMany(products, { foreignKey: "userId" });
products.belongsTo(users, { foreignKey: "userId" });

//product-productVariations 1:M
products.hasMany(productVariations, { foreignKey: "productId" });
productVariations.belongsTo(products, { foreignKey: "productId" });

//productVariations-cartItems 1:M && cart-cartItems 1:M  (productVariation-cartItems-cart M:M)
productVariations.hasMany(cartItems, { foreignKey: "variationId" });
cartItems.belongsTo(productVariations, { foreignKey: "variationId" });
//
carts.hasMany(cartItems, { foreignKey: "cartId" });///relations

//1:1 Relations


//user-cart 1:1
users.hasOne(carts, { foreignKey: "userId" ,onDelete : "CASCADE" });
carts.belongsTo(users, { foreignKey: "userId" ,onDelete : "CASCADE" });
users.hasOne(sessions,{foreignKey : "userId"});
sessions.belongsTo(users,{foreignKey : "userId"})

//1:M Relations
//user-role 1:M
roles.hasMany(users, { foreignKey: "roleId" });
users.belongsTo(roles, { foreignKey: "roleId" });

cartItems.belongsTo(carts, { foreignKey: "cartId" });

//productVariations-orderItems 1:M && orders-orderItems 1:M (productVariations-orderItems-orders M:M)
productVariations.hasMany(orderItems, { foreignKey: "variationId" });
orderItems.belongsTo(productVariations, { foreignKey: "variationId" });
//
orders.hasMany(orderItems, { foreignKey: "orderId" });
orderItems.belongsTo(orders, { foreignKey: "orderId" });
 






module.exports = {models,db}