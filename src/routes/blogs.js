const express = require('express');
const router = express.Router();
const blogController = require('../app/controllers/BlogController');

router.get('/', blogController.list);
router.get('/create', blogController.create);
router.post('/store', blogController.store);
router.get('/:id/edit', blogController.edit);
router.put('/:id', blogController.update);
router.patch('/:id/restore', blogController.restore);
router.delete('/:id', blogController.delete);
router.delete('/:id/force', blogController.forceDelete);
router.get('/:slug', blogController.detail);

module.exports = router;
