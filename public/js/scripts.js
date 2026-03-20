// Create cards dynamically
const addCards = (movies) => {
    movies.forEach(movie => {

        let card = `
        <div class="col s4">
            <div class="card">
                <div class="card-image">
                    <img src="${movie.image}">
                </div>
                <div class="card-content">
                    <span class="card-title">${movie.title}</span>
                    <p>${movie.description}</p>
                </div>
            </div>
        </div>
        `;

        $("#card-section").append(card);
    });
};

// Fetch from backend API
const getMovies = () => {
    fetch("/api/movies")
        .then(res => res.json())
        .then(data => addCards(data));
};

$(document).ready(function () {
    $('.modal').modal();
    getMovies();
});