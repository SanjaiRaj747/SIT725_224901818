const express = require('express');
const router = express.Router();
const Controllers = require('../controllers'); // [cite: 391, 393]

// GET /api/books -> getAllBooks [cite: 260]
router.get('/', Controllers.booksController.getAllBooks);

// GET /api/books/:id -> getBookById [cite: 261]
router.get('/:id', Controllers.booksController.getBookById);

module.exports = router;