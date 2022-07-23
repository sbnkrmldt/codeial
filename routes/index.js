const express = require('express');
const router = express.Router();
const homeContrller = require('../controllers/home_controller');

console.log('router loaded');


router.get('/',homeContrller.home);

module.exports= router;