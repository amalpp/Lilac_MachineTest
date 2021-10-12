const express = require('express');

const userController = require('../controller/user')

const router = express.Router()



router.post('/add',userController.add);
router.get('/fetch',userController.fetch);
router.put('/modify/:id',userController.modify);
router.delete('/delete/:id',userController.delete);



module.exports = router;