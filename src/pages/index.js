import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import axios from "axios";

export default function Home() {
  return <main>Bonjour</main>;
}

export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/top_rated",
      { headers: { Autorizations: `Bearer ${process.env.API_KEY}` } }
    );
    console.log(data);
    return {
      props: {
        films: data.results,
      },
    };
  } catch (error) {}
};
