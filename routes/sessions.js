const router = require('express').Router();

const SessionsController = require('../controllers/sessionsController');

// Our Routes
router.post(`/authenticate`, SessionsController.authenticate);
router.post(`/logout`, SessionsController.logout);

module.exports = router;