const express = require('express');
const app = express();
const port = 3000;

/**
 * CALCULATION FUNCTION
 * Requirement: One calculation function
 */
const addNumbers = (num1, num2) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return null;
    return a + b;
};

/**
 * REST API ENDPOINT
 * Requirement: One REST API endpoint
 * Example: http://localhost:3000/add?a=10&b=20
 */
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const result = addNumbers(a, b);

    if (result === null) {
        return res.status(400).json({ 
            statusCode: 400, 
            message: "Invalid input. Please provide numbers for a and b." 
        });
    }

    res.status(200).json({ 
        statusCode: 200, 
        data: result, 
        message: "Success" 
    });
});

/**
 * ROOT ROUTE
 * This fixes the "Cannot GET /" error in your browser.
 */
app.get('/', (req, res) => {
    res.send(`
        <h1>SIT725 Task 6.2C - Calculator API</h1>
        <p>The server is running successfully!</p>
        <p>To test the calculation API, use this link: 
            <a href="/add?a=10&b=20">/add?a=10&b=20</a>
        </p>
    `);
});

// Export for the test suite
module.exports = { app, addNumbers };

// Start the server
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}