const roleController = require('../controllers/roleController')

const router = require('express').Router()



router.post('/createrole',roleController.createRole)
router.delete('/deleterole',roleController.deleteRole)


module.exports = router;