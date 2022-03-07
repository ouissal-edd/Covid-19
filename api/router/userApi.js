const router = require('express').Router();
const {
    createFormulair
} = require('../controllers/userController')


router.post('/createData',createFormulair);




module.exports = router;