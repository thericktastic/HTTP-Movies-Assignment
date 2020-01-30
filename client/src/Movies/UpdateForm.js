import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const initialMovie = {
  title: "",
  director: "",
  metascore: "",
  stars: []
};

const UpdateForm = props => {
  const [movie, setMovie] = useState(initialMovie);

  console.log("This is props in UpdateForm: ", props)

  return (
    <div>
      <h2>Update Movie</h2>
      <form>
        <label>
          Title: 
          <input
            type="text"
            name="title"
            onChange={props.handleUpdate}
            placeholder="Title"
            value=""
          />
        </label>
        <label>
          Director: 
          <input
            type="text"
            name="director"
            onChange={props.handleUpdate}
            placeholder="Director"
            value=""
          />
        </label>
        <label>
          Metascore: 
          <input
            type="text"
            name="metascore"
            onChange={props.handleUpdate}
            placeholder="Metascore"
            value=""
          />
        </label>
        <label>
          Stars: 
          <input
            type="text"
            name="stars"
            onChange={props.handleUpdate}
            placeholder="Stars"
            value=""
          />
        </label>
      </form>
    </div>
  );
};

export default UpdateForm;
