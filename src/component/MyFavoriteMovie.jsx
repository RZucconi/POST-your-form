import { useState } from "react";

import "./MyFavoriteMovie.css";

function MyFavoriteMovie() {
  const [title, setTitle] = useState("");
  const [poster, SetPoster] = useState("");
  const [comment, setComment] = useState("");

  const data = { title, poster, comment };

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const url = "https://post-a-form.herokuapp.com/api/movies";
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(` Your favorite movie #${res} has been successfully added!`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert("There was an error when adding your favorite movie.");
      });
  };

  return (
    <div className="MyFavoriteMovie">
      <h1>My Favoryte Movie</h1>
      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Information</legend>
          <div className="form-data">
            <label htmlFor="movieTitle">My Favorite Movie Title</label>
            <input
              type="text"
              id="movieTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="moviePosterURL">Movie's Poster URL</label>
            <input
              type="text"
              id="moviePosterURL"
              value={poster}
              onChange={(e) => SetPoster(e.target.value)}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="filmComment">Leave a comment :</label>
            <textarea
              id="FilmComment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Send" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default MyFavoriteMovie;
