import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Film = ({ movie }) => {
  // finalisation la création du formaulaire + handlesubmit
  // attention au eventprevent default
  // faire appel  a la route addRevieews ( avec le body  + id)
  // utilisation de useRouter

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

      <form>
        <input type="text" />
      </form>
    </main>
  );
};

export default Film;

// faire pareil mais avec un find By Id sur Movie
// apreil pour le reste.

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
