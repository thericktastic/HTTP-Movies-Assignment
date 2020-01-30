import React, { useState, useParams } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// const initialMovie = {
//   title: "",
//   director: "",
//   metascore: "",
//   stars: []
// };

const UpdateForm = props => {
  const [movie, setMovie] = useState(props.movie);
  //   const { id } = useParams();

  // console.log("This is props in UpdateForm: ", props);

  const handleChanges = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  // console.log("This is movie in UpdateForm: ", movie);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        console.log("This is res.data in UpdateForm: ", res.data);
        props.updatedMovies(movie);
        props.history.push(`/movies/${movie.id}`);
      })
      .catch(err => console.log("You failed in UpdateForm, here's why: ", err));
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              className="update-input"
              type="text"
              name="title"
              onChange={handleChanges}
              placeholder={props.movie.title}
              value={movie.title}
            />
          </label>
        </div>
        <div>
          <label>
            Director:
            <input
              className="update-input"
              type="text"
              name="director"
              onChange={handleChanges}
              placeholder={props.movie.director}
              value={movie.director}
            />
          </label>
        </div>
        <div>
          <label>
            Metascore:
            <input
              className="update-input"
              type="text"
              name="metascore"
              onChange={handleChanges}
              placeholder={props.movie.metascore}
              value={movie.metascore}
            />
          </label>
        </div>
        <div>
          <label>
            Stars:
            <input
              className="update-input"
              type="text"
              name="stars"
              onChange={handleChanges}
              placeholder={props.movie.stars}
              value={movie.stars}
            />
          </label>
        </div>
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  );
};

export default UpdateForm;

// {props.movie.stars.map((star, index) => {
//     return (
//       <input
//         className="update-input"
//         type="text"
//         name="stars"
//         onChange={handleChanges}
//         placeholder={star}
//         value={movie.stars}
//       />
//     );
//   })}
