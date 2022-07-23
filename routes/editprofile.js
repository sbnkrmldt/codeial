const express = require('express');
const router = express.Router();

const usersController = require('../controllers/editprofile_controller');


router.get('/editprofile',usersController.editprofile);

module.exports = router;