import "./MovieCard.css";
import axios from "../../lib/axios/axios-instance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie, handleUpdate }) => {
  const [score, setScore] = useState(0);

  const handleNewScore = async (e) => {
    e.preventDefault();
    const movie_id = movie.id;
    try {
      await axios.post("/api/user_movies", {
        user_movie: {movie_id, score },
      });
      setScore(0);
      handleUpdate();
    } catch (err) {
      console.log(err);
    }
  };
  


  return (
    <div className="movie-card">
      <div className="movie-info">
        <span id="mtitle">{movie.title}</span>
        <span id="mdirector">{movie.director}</span>
        <span id="mscore">Score: {movie.average_score}</span>
      </div>
      <div className="movie-score">
        <form onSubmit={handleNewScore}>
          <input
            type="number"
            min="0.00"
            max="10.00"
            onChange={(e) => setScore(e.target.value)}
          />
          <button id="btn-score" type="submit">
            New score
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieCard;
