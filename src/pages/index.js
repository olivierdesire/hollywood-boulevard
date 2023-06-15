import Image from "next/image";
import { Inter } from "next/font/google";
import Film from "@/components/Film";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
import axios from "axios";

export default function Home({ films }) {
  return (
    <main>
      <h1> Films </h1>
      <Link href="/film">
        {films.map((film) => {
          return <Film key={film.id} film={film} />;
        })}
      </Link>
    </main>
  );
}

export const getServerSideProps = async () => {
  let dataToSend = [];
  try {
    const { data } = await axios.get(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies/top_rated",
      { headers: { Authorization: `Bearer ${process.env.API_KEY}` } }
    );
    dataToSend = data.results;
  } catch (error) {}

  return {
    props: {
      films: dataToSend,
    },
  };
};
