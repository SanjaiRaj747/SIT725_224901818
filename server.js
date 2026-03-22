const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());

// API (THIS IS REQUIRED FOR TASK)
app.get("/api/movies", (req, res) => {
    const movies = [
        {
            title: "Inception",
            image: "images/movie1.jpg",
            link: "More Info",
            description: "A mind-bending thriller by Christopher Nolan."
        },
        {
            title: "Interstellar",
            image: "images/movie2.jpg",
            link: "More Info",
            description: "A journey through space and time."
        }
    ];
    res.json(movies);
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});