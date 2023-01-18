const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authentication');

router.get('/', (req, res) => {
    res.render('login.html')
});

router.post('/login', authController.login);

router.get('/jsonfile', (req, res) => {
    const apiJson = require('../json/api.json');
    res.send(apiJson);
})

router.post('/verify', authController.verifyUser)


module.exports = router;