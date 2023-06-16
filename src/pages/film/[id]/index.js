import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import connectPageToDb from "@/utils/connectPageToDb";
import Movie from "@/models/Movie";
import { useRouter } from "next/router";

const Film = ({ movie }) => {
  // finalisation la création du formaulaire + handlesubmit
  // attention au eventprevent default
  // faire appel  a la route addRevieews ( avec le body  + id)
  // utilisation de useRouter
  const [author, setAuthor] = useState("");
  const [rate, setRate] = useState(1);
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/movies/addReview", {
        author: author,
        rate: rate,
        text: text,
        id: router.query.id,
      });
    } catch (error) {}
  };

  return (
    <main>
      <Image
        src={movie.poster_path.original}
        alt="image movie"
        width={400}
        height={600}
      />
      <p>Titre {movie.title}</p>
      <p>Titre original {movie.original_title}</p>
      <p>Année de sortie {movie.release_date}</p>
      <p>Synopsis {movie.overview}</p>

      {movie.reviews.map}

      <form style={{ color: "black" }} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="auteur"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <hr></hr>
        <input
          type="number"
          value={rate}
          placeholder="1"
          onChange={(e) => setRate(e.target.value)}
        />
        <hr></hr>
        <input
          type="text"
          placeholder="commentaire"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <hr></hr>
        <button type="submit">Ajouter votre commentaire</button>
      </form>
    </main>
  );
};

export default Film;

// faire pareil mais avec un find By Id sur Movie
// apreil pour le reste.

export const getServerSideProps = async (context) => {
  await connectPageToDb();
  let dataToSend = {};
  try {
    const movie = await Movie.findById(context.params.id);
    dataToSend = movie;
  } catch (error) {
    dataToSend = {};
  }
  return {
    props: {
      movie: JSON.parse(JSON.stringify(dataToSend)),
    },
  };
};

// export const getServerSideProps = async (context) => {
//   let dataToSend = {};
//   try {
//     const { data } = await axios.get(
//       `https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movie/${context.params.id}`,
//       { headers: { Authorization: `Bearer ${process.env.API_KEY}` } }
//     );
//     dataToSend = data;
//   } catch (error) {}

//   return {
//     props: { movie: dataToSend },
//   };
// };
