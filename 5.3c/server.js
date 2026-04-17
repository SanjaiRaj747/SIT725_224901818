const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to the DB (Using 127.0.0.1 for stability)
mongoose.connect("mongodb://127.0.0.1:27017/sit725_books")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB", err));

app.use(express.static('public'));
app.use('/api/books', require('./routes/books.routes'));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});