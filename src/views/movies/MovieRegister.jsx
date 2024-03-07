import { useState } from "react";
import Container from "../../components/container/Container";
import "./MovieRegister.css";
import axios from "../../lib/axios/axios-instance";
const MovieRegister = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");

  const cleanFields = () => {
    setTitle("");
    setDirector("");
  };

  const handleNewMovie = async (e) => {
  e.preventDefault();
  try{

    await axios.post("/api/movies", {movie: {title, director}});
    cleanFields();
  } catch (err){
    console.log(err);
  }
  
  }

  return (
    <Container>
      <div className="container-movie">
        <form className="form-movie" onSubmit={handleNewMovie}>
          <h1>New Movie</h1>

          <input className="ipt-movie"
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />

          <input className="ipt-movie"
            type="text"
            name="director"
            placeholder="Director"
            onChange={(e) => setDirector(e.target.value)}
            value={director}
          />

          <button className="btn-movie" type="submit">Register</button>
        </form>
      </div>
    </Container>
  );
};

export default MovieRegister;
