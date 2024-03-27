import { useRouter } from "next/router";

const shoPage = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>shoping page</h1>
    </div>
  );
};

export default shoPage;
