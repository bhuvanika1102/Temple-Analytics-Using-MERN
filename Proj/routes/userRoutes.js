
const express = require('express');
const router = express.Router();
const { registerController } = require('../controllers/userCtrl');
const { query1Controller  } = require('../controllers/query1Ctrl');
const { query2Controller } = require('../controllers/query2Ctrl');
const { query3Controller } = require('../controllers/query3Ctrl');
// const {  searchcontroller  } = require('../controllers/searchctrl');

router.post('/register', registerController);
router.get('/query1', query1Controller );
router.get('/query2', query2Controller);
router.get('/query3', query3Controller);
// router.get('/search',  searchcontroller );



module.exports = router;
