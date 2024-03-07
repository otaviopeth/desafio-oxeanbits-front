import Container from "../../components/container/Container";
import "./Movies.css";
import axios from "../../lib/axios/axios-instance";
import { useEffect, useState } from "react";
import MovieCard from "../../components/moviecard/MovieCard"; //estava sendo usado antes de implementar o kendogrid
import {
  Grid,
  GridColumn as Column,
  GridCell,
} from "@progress/kendo-react-grid";

const Movies = () => {
  const [listMovies, setListMovies] = useState([]);
  const [score, setScore] = useState(0);
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);

  const onPageChange = (e) => {
    setSkip(e.page.skip);
    setTake(e.page.take)

  }

  const scoreCell = (props) => {
    return (
      <td>
        <form onSubmit={(e) => handleNewScore(e, props.dataItem.id)}>
          <input
            type="number"
            min="0.00"
            max="10.00"
            name="newscore"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <button className="btn-score">New Score</button>
        </form>
      </td>
    );
  };

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const response = await axios.get("/api/movies");
      //console.log(response.data);
      setListMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewScore = async (e, id) => {
    e.preventDefault();
    try {
      await axios.post("/api/user_movies", {
        user_movie: {movie_id: id, score },
      });
      setScore(0);
      getList();
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Grid data={listMovies.slice(skip, skip + take)}
      pageable={true}
      skip={skip}
      take={take}
      onPageChange={onPageChange}
      total={listMovies.length}

      >
        <Column field="title" title="Title" width="250px" />
        <Column field="director" title="Director" width="250px" />
        <Column field="average_score" title="Average Score" width="250px" />
        <Column
          field="NewScore"
          title="NewScore"
          width="250px"
          cell={scoreCell}
        />
      </Grid>
    </Container>
  );
};

export default Movies;
