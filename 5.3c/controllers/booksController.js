const booksService = require('../services/books.service');

exports.getAllBooks = (req, res) => {
    const items = booksService.getAllBooks(); // [cite: 388]
    res.json({ data: items });
};

exports.getBookById = (req, res) => {
    const item = booksService.getBookById(req.params.id);
    if (item) {
        res.json({ data: item });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
};