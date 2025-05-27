const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth.controller');

router.get('/signup', authCtrl.renderSignup);
router.post('/signuo', authCtrl.signupUser);

router.get('/login', authCtrl.renderLogin);
router.post('/login', authCtrl.loginUser);

router.get('/logout', authCtrl.logoutUser);

module.exports = router;