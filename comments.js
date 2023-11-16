// Create web server

// Import express
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getComments);

router.post('/', commentController.postComment);

router.delete('/:id', commentController.deleteComment);

module.exports = router;