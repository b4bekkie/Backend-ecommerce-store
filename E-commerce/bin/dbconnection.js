
const config = require('../config.json');
const {Sequelize} = require('sequelize');

const database = new Sequelize(config.db);

database.authenticate().then(()=>{
    console.log("database Connected")
}).catch((e)=> {
    console.log(e.message)
})

module.exports = database