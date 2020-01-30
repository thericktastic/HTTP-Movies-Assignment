import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";

// components
import MovieCard from "./MovieCard";
import UpdateForm from "./UpdateForm";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  // New code
  handleUpdate = e => {
    e.preventDefault();
    this.props.history.push(`/movies/${this.state.movie.id}/update-form`);
  };
  // New code

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }


    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <Route
          path="/movies/:id/update-form"
          render={props => {
            return <UpdateForm {...props} movie={this.state.movie} />;
          }}
        />
        <button className="edit-button" onClick={this.handleUpdate}>
          Update
        </button>
      </div>
    );
  }
}
