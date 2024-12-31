const router = require('express').Router();
const bookControllers = require('../controllers/bookControllers');
const authControllers = require('../controllers/authControllers')


// router.get('/', bookControllers.getAllBooks)
router.post('/books', authControllers.authentication,authControllers.restrictTo('0','1'),bookControllers.createBook)
router.get('/books', authControllers.authentication,authControllers.restrictTo('0','1','2'),bookControllers.getAllBooks)
module.exports = router;