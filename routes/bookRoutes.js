const express = require("express");
const controller = require("../controllers/bookController.js");
const router = express.Router();

router.get('/books', controller.getAllBooks);
router.get('/books/:id', controller.getBookById);
router.get('/books/genre/:genre', controller.getBooksByGenre);

router.post('/books', controller.createBook);

router.put('/books/:id', controller.updateBook);

router.delete('/books/:id', controller.deleteBook);

module.exports = router;