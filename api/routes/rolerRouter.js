const roleController = require('../controllers/roleController')

const router = require('express').Router()

const verify = require('../middleware/verify')



router.post('/createrole',roleController.createRole)
router.delete('/deleterole',roleController.deleteRole)
router.get('/getallroles',verify.admin,roleController.getAllRoles);
router.put('/roleupdate',roleController.roleUpdate)



module.exports = router;