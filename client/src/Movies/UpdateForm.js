import React, { useState } from "react";
import axios from "axios";

const UpdateForm = props => {
  const [movie, setMovie] = useState(props.movie);

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

    // This if statement checks to see if the entry in the 'stars' field is an array, and if that check returns 'false' then movie.stars.split(",") converts it to an array by splitting up the entries separated by a comma
    if (!Array.isArray(movie.stars)) {
      movie.stars = movie.stars.split(",");
    }
    console.log(`This is movie.stars: `, movie.stars);

    // This axios.put sends the updated movie to the server and then redirects the user to the home page where the user may view the updated list of movies
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        console.log("This is res.data in UpdateForm: ", res.data);
        props.history.push(`/`);
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