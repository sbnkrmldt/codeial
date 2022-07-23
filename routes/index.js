const express = require('express');
const router = express.Router();
const homeContrller = require('../controllers/home_controller');

console.log('router loaded');


router.get('/',homeContrller.home);
router.use('/users',require('./users'));
router.use('/users',require('./editprofile'));

//for any further routes access from here
//router.use('/routerName',require('./routerfile'));

module.exports= router;