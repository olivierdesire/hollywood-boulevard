// -> créer le json
import data from "@/assets/data.json";
import Movie from "@/models/Movie";
import connectRouteToDb from "@/middlewares/connectDB";

const handler = async (req, res) => {
  if (req.method === "GET") {
    await Movie.insertMany(data);
    res.json({ message: "DB created" });
  } else {
    res.status(404).json({ message: "This route does not existe" });
  }
};

export default connectRouteToDb(handler);
