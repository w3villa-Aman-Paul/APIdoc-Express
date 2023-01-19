const express = require('express');
const router = express.Router();
const { apiDocUIController, authController, jsonController } = require('../controllers');

router.get('/', authController.renderLoginPage);
router.post('/login', authController.login);
router.get('/apidoc',apiDocUIController.renderDoc);
router.get('/jsonfile', jsonController.jsonFile);
router.post('/verify', authController.verifyUser)

module.exports = router;