const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.org/posts");
  return res.json();
};

const page = ({ params }) => {
  console.log(params);
  return <h1>{params.id}</h1>;
};
export default page;

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({ id: post.id.toString() }));
}
