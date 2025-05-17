const arrayMovies = []

function addMovie(name, year, genre, rating){
    const movieCreate = {
        movieName: name, 
        movieYear: year, 
        movieGenre: genre,
        movieRating: parseFloat(rating)
    }
    return movieCreate
}


const movieOne = addMovie("Stíny nad Atlantidou", 2022, "Sci-fi", 8.3)
const movieTwo = addMovie("Projekt Chronos", 2011, "Drama", 8.4)
const movieThee = addMovie("Hranice mlhy", 2018, "Psychologický thriller", 7.7)

console.log(movieOne)

// s DOM podle pole ty hodnoty hned víše

arrayMovies.push(movieOne)
arrayMovies.push(movieTwo)
arrayMovies.push(movieThee)

console.log(arrayMovies)

function filterMovieGenre(mov, genre){
    return mov.filter((movies)=>{
        return movies.movieGenre === genre
    })
}

console.log(filterMovieGenre(arrayMovies, "Drama"))


function filterMovieName(mov, name){
    return mov.filter((movies)=>{
        return movies.movieName === name
    })
}

console.log(filterMovieName(arrayMovies, "Hranice mlhy"))

function sortMoviesByRating(moviesArray){
    return moviesArray.slice().sort((a, b) => b.movieRating - a.movieRating);
}


console.log(sortMoviesByRating(arrayMovies));



// dát to do jedné funkce
// pak to zkusit dát i to polo obj.
// funkce brát od spoda ? pochopit


        /* cisla.sort((a, b) => b - a); */