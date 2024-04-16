import { useRouter } from "next/router";

const shopPage = () => {
  const { query } = useRouter();
  console.log(query);
  const testing = query.slug && query.slug[1] === undefined ? "all" : query.slug[1];
  return (
    <div>
      <h1>shoping page</h1>
      <p>shop = {query.slug && query.slug[0] + "-" + testing}</p>
    </div>
  );
};

export default shopPage;
