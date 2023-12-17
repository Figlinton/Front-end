'use strict';



const numberOfFilms = +prompt('How many films you look already?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

for (let i = 0; i <= 2; i ++) {
    const a = prompt ('Last film what you look?', ''),
          b = prompt ('Your opinion about this film?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 20) {
        personalMovieDb.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDb.count < 10) {
    console.log('You have not seen enough movies');
} else if (personalMovieDb.count > 10 && personalMovieDb.count < 30) {
    console.log('You are a classic viewer');
} else if (personalMovieDb.count > 30) {
    console.log('You are a The Movie Man');
} else if (personalMovieDb.count <= 0) {
    console.log('Go watch a movie');
} else {
    console.log('Error');
}

console.log(personalMovieDb);