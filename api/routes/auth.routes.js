const express = require('express');
const signUp  = require('../controller/auth.controller.js');

const router = express.Router();

router.post('/signUp', signUp)

module.exports = router;