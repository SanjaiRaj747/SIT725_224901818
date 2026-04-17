const mongoose = require('mongoose');
const Book = require('../models/book.model');

const uri = "mongodb://127.0.0.1:27017/sit725_books";

const seedData = [
    { id: "b1", title: "The Three-Body Problem", author: "Liu Cixin", year: 2008, genre: "Science Fiction", summary: "...", price: mongoose.Types.Decimal128.fromString("29.99") },
    { id: "b2", title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, genre: "Classic", summary: "...", price: mongoose.Types.Decimal128.fromString("22.00") },
    { id: "b3", title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Classic", summary: "...", price: mongoose.Types.Decimal128.fromString("22.00") },
    { id: "b4", title: "The English Patient", author: "Michael Ondaatje", year: 1992, genre: "Historical Fiction", summary: "...", price: mongoose.Types.Decimal128.fromString("25.39") },
    { id: "b5", title: "Small Gods", author: "Terry Pratchett", year: 1992, genre: "Fantasy", summary: "...", price: mongoose.Types.Decimal128.fromString("31.99") }
];

async function seedDB() {
    try {
        await mongoose.connect(uri);
        await Book.deleteMany({}); // Clears old "0.00" data [cite: 19]
        await Book.insertMany(seedData); // Inserts correct Decimal128 values 
        console.log("Database Seeded Successfully with correct prices!");
        process.exit();
    } catch (err) {
        console.error("Seeding error:", err);
        process.exit(1);
    }
}

seedDB();