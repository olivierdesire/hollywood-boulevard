import connectRouteToDb from "@/middlewares/connectDB";
import Movie from "@/models/Movie";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { id, author, rate, text } = req.body;
      const movie = await Movie.findById(id);
      // faire le push dans reviews
      // + sauv + envoi message ok vers le client.
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status;
  }
};
