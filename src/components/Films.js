import Image from "next/image";
import Link from "next/link";

const Films = ({ film }) => {
  return (
    <div>
      <Link href={`/film/${film._id}`}>
        <div>{film.title}</div>
      </Link>
      <Image
        src={film.poster_path.w342}
        alt="test"
        width={200}
        height={100}
        className=""
      />
    </div>
  );
};

export default Films;
