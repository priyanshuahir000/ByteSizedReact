import { useState } from "react";
import { Search } from "./Search";
import { NumResult } from "./NumResult";
import { Navbar } from "./Navbar";
import { Main } from "./Main";
import { Box } from "./Box";
import { MovieList } from "./MovieList";
import { WatchedSummary } from "./WatchedSummary";
import { WatchedMovieList } from "./WatchedMovieList";
import { Loading } from "./Loading";
import { ErrorMsg } from "./ErrorMsg";
import { MovieDetails } from "./MovieDetails";
import { useMovies } from "./hooks/useMovies";
import {useLocalStorage} from "./hooks/useLocalStorage";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const KEY = "9035c45e";
export default function App() {
  const [query, setQuery] = useState("");
  const [isSelected, setIsSelected] = useState(null);
  const [watched, setWatched] = useLocalStorage([], "watched");

  const { movies, isLoading, error } = useMovies(query);

  function onSelectMovie(selectedId) {
    setIsSelected((isSelected) =>
      selectedId === isSelected ? null : selectedId
    );
  }

  function onCloseMovie() {
    setIsSelected(null);
  }

  function handleAddWatched(movie) {
    setWatched([...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={onSelectMovie} />
          )}
          {error && <ErrorMsg message={error} />}
        </Box>
        <Box>
          {isSelected ? (
            <MovieDetails
              selectedId={isSelected}
              onCloseMovie={onCloseMovie}
              handleAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                handleDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
