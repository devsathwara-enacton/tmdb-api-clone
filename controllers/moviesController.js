const movieModel = require("../models/Movies");

exports.createMovie = async (req, res) => {
  try {
    const {
      mid,
      adult,
      backdrop_path,
      genre_ids,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
      external_ids,
      status,
      revenue,
      runtime,
      imdb_id,
      budget,
    } = req.body;
    const data = {
      mid,
      adult,
      backdrop_path,
      genre_ids,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
      external_ids,
      status,
      revenue,
      runtime,
      imdb_id,
      budget,
    };
    await movieModel.createMovies(data);
    res.status(201).json({ msg: "Movie insterted" });
  } catch (error) {
    console.error(error);
  }
};
