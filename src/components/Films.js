import Image from "next/image";
const Films = ({ film }) => {
  return (
    <div>
      <div>{film.title}</div>
      <Image
        src={film.poster_path.w92}
        alt="test"
        width={200}
        height={100}
        className=""
      />
    </div>
  );
};

export default Films;
