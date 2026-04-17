const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: String,
    title: String,
    author: String,
    year: Number,
    genre: String,
    summary: String,
    price: mongoose.Schema.Types.Decimal128 // Required for 5.3C
});

module.exports = mongoose.model('Book', bookSchema);