const roleController = require('../controllers/roleController')

const router = require('express').Router()



router.post('/createrole',roleController.createRole)
router.delete('/deleterole',roleController.deleteRole)
router.get('/getallroles',roleController.getAllRoles);
router.put('/roleupdate',roleController.roleUpdate)



module.exports = router;