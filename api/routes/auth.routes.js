const express = require('express');
const signUp  = require('../controller/auth.controller.js');
const signIn = require('../controller/auth.controller.js');

const router = express.Router();

router.post('/signUp', signUp)
router.post('/signIn', signIn)

module.exports = router;