import Link from "next/link";
import { getAllPost } from "../api/api";
import { postDataProps } from "../types/post";
const Posts = async () => {
  const allposts = await getAllPost();
  return (
    <>
      <div className="text-center py-4 m-4">
        <Link
          href="/createpost"
          className="text-white
         bg-blue-500 p-4 
         hover:underline rounded-md"
        >
          Create a new blog
        </Link>
      </div>

      {allposts &&
        allposts.map((post: postDataProps, index: number) => (
          <div key={index} className="text-black">
            <div key={post.id} className="bg-blue-500 mx-10 rounded-xl my-4">
              <h1 className="px-4 pt-2">{post.title}</h1>
              <p className="my-4 px-4 truncate">
                {post.body ? post.body : "The body content will come soon."}
              </p>
              <button className="m-4 bg-blue-300 p-3 rounded-md">
                <Link href={`/posts/${post.id}`}>View More</Link>
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
export default Posts;
