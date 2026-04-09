const express = require("express");

const app = express();

const port = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to SIT725 Express Server!");
});

// Addition API
app.get("/add", (req, res) => {

    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    const result = num1 + num2;

    res.send("Result: " + result);
});

// start server
app.listen(port, () => {
    console.log("Server running at http://localhost:" + port);
});