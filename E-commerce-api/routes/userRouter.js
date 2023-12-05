const userController = require('../controllers/userController');

const router = require('express').Router()







router.post('/createuser',userController.createUser)


module.exports = router