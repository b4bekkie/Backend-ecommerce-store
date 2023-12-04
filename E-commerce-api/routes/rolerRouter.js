const roleController = require('../controllers/roleController')

const router = require('express').Router()



router.post('/createrole',roleController.createRole)


module.exports = router;