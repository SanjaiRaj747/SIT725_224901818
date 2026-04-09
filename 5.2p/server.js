const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public')); // Serve static HTML [cite: 574]
app.use(express.json());

// Mount the routes at /api/books [cite: 260, 362]
const booksRoutes = require('./routes/books.routes.js');
app.use('/api/books', booksRoutes);
// Add this to server.js
app.set('json spaces', 2);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});