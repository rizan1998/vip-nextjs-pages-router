import { useRouter } from "next/router";

const shopPage = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>shoping page</h1>
      <p>{query.slug && query.slug[0] + "-" + query.slug[1]}</p>
      {/* <p>shop {`${query.slug ? query.slug[0] : "" + "-" + query.slug[0]}`}</p> */}
    </div>
  );
};

export default shopPage;
