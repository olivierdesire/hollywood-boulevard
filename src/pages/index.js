import Image from "next/image";
import { Inter } from "next/font/google";
import Films from "@/components/Films";
import Movie from "@/models/Movie";
import connectPageToDb from "@/utils/connectPageToDb";

const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import Movie from "@/models/Movie";

export default function Home({ films }) {
  return (
    <main>
      {films.map((film) => {
        return <Films key={film._id} film={film} />;
      })}
    </main>
  );
}

export const getServerSideProps = async () => {
  await connectPageToDb();
  let movieData;
  try {
    movieData = await Movie.find();
  } catch (error) {
    movieData = [];
  }

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movieData)),
    },
  };
};

// export const getServerSideProps = async () => {
//   let dataToSend = [];
//   try {
//     const { data } = await axios.get(
//       "https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/top_rated",
//       { headers: { Authorization: `Bearer ${process.env.API_KEY}` } }
//     );
//     dataToSend = data.results;
//   } catch (error) {}

//   return {
//     props: {
//       films: dataToSend,
//     },
//   };
// };
