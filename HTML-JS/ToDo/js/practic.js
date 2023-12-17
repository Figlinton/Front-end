const numberOfFilms = prompt('How many films you look already?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actor: {},
    genres: [],
    private: false
};

const a = prompt ('Last film what you look?', ''),
      b = prompt ('Your opinion this film?', ''),
      c = prompt ('Last film what you look?', ''),
      d = prompt ('Your opinion this film?', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);