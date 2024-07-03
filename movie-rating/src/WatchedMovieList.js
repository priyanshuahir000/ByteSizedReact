import { WatchedMovie } from "./WatchedMovie";

export function WatchedMovieList({ watched, handleDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          handleDeleteWatched={handleDeleteWatched}
        />
      ))}
    </ul>
  );
}
