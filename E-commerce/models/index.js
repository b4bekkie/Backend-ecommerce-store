const sequelize = require('../bin/dbconnection');

const models = {};

const db = {};


db.sequelize = sequelize;
sequelize.models = models;

module.exports = {models,db}