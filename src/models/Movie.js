import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
  title: String,
  original_title: String,
  release_date: Date,
  poster_path: Object,
  overview: String,
  reviews: { type: Array, default: [] },
});

const Movie = models.Movie || model("Movie", movieSchema);
export default Movie;
