const router = require('express').Router();

//controllers
const BlogsController = require('../controllers/blogsController');

//routes
router.get(`/`, BlogsController.index);
router.get(`/:id`, BlogsController.show);
router.get(`/:id/edit`, BlogsController.edit);
router.post(`/`, BlogsController.create);
router.post(`/update`, BlogsController.update);
router.post(`/destroy`, BlogsController.destroy);

module.exports = router;
