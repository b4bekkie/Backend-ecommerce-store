const sequelize = require('../bin/dbconnection');

const Users = require('./definitions/Users')

const Cart= require('./definitions/Carts')
const Product = require('./definitions/Products')
const CartItem = require('./definitions/CartItem')
const Variation = require('./definitions/Variations')
const Role = require('./definitions/Roles')
const Order = require('./definitions/Orders')
 const OrderItem = require("./definitions/OrderItem")

const models = [Users,Product,CartItem,Cart,Variation,Role,Order,OrderItem];

const db = {};


db.sequelize = sequelize;
sequelize.models = models;

module.exports = {models,db}