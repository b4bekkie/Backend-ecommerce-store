const userController = require('../controllers/userController');

const router = require('express').Router()







router.post('/createuser',userController.createUser);
router.get('/getusers',userController.getAllUsers)
router.delete('/deleteuser',userController.deleteUser)


module.exports = router ;