const router = require('express').Router();

const AuthorsController = require('../controllers/authorsController');

//routes
router.post(`/`, AuthorsController.create);

module.exports = router;