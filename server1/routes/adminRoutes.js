const router = require('express').Router();
const userController = require('../controllers/userControllers');
const authControllers = require('../controllers/authControllers');

router.get('/users', authControllers.authentication,authControllers.restrictTo('0'), userController.getAllUsers)
router.post('/users',authControllers.authentication, authControllers.restrictTo('0'),userController.createUser)
router.delete('/users/:id', authControllers.authentication,authControllers.restrictTo('0'),userController.deleteUser)

module.exports =router; 