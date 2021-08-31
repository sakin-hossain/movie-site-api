const showMovies =document.getElementById('show-movies');
const showMoviesDetails =document.getElementById('movie-details');
const loader =document.getElementById('loader');

fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=651a329de768754e8c390b76805acf19')
.then(res => res.json())
.then(data => setMovies(data.results));

const setMovies =(movies) =>{
    loader.style.display = "none"
    movies.forEach(movie => {
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
            <div onclick ="loadMovieDetails(${movie.id})" class="shadow rounded p-3 m-2">
                <img class="img-fluid" src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="">
                <h3 class="text-center">${movie.title}</h3>
                <p>${movie.overview.slice(0,200)}</p>
            </div>
        `
        showMovies.appendChild(div);
    });
}

const loadMovieDetails = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=651a329de768754e8c390b76805acf19`)
    .then(res => res.json())
    .then(data => displayMovieDetails(data));
}

const displayMovieDetails = (movie) =>{
    console.log(movie);
    showMoviesDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('movie-details-style');
    div.innerHTML = `
    <div class="shadow rounded p-3 m-2">
    <img class="img-fluid" src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="">
    <h2>${movie.title}</h2>
    <h2>${movie.original_title}</h2>
    <h4 class="text-center text-success">${movie.tagline}</h4>
    <p>${movie.overview}</p>
    <p class="fw-bold text-primary text-center">Rating: ${movie.vote_average}</p>
    </div>
    `
    showMoviesDetails.appendChild(div);

}