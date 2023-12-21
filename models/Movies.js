const knexfile = require("../knexfile");
const knex = require("knex")(knexfile.development);
const db = knex;

module.exports = {
  getAllmovies: async () => {
    return await db("movies-info").select("*");
  },
  getMoviesbyID: async (mid) => {
    return await db("movies-info").select("*").where({ mid: mid }).first();
  },
  createMovies: async (data) => {
    return await db("movies-info").insert(data);
  },
};
