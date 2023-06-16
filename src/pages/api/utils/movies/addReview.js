import connectRouteToDb from "@/middlewares/connectDB";
import Movie from "@/models/Movie";

const handler = async (req, res) => {
  console.log(req.method);
  if (req.method === "POST") {
    try {
      const { id, author, rate, text } = req.body;
      const movie = await Movie.findById(id);
      movie.reviews.push({
        author: author,
        rate: rate,
        text: text,
      });
      await movie.save();
      res.json({ message: "review posted" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(404).json({ message: "this route does not exist" });
  }
};

export default connectRouteToDb(handler);
