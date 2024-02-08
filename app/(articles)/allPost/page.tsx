import Link from "next/link";
import React from "react";

interface postData {
  id:string;
  userId: string;
  it: string;
  title: string;
  body: string;
}

const getAllPost = async () => {
  try {
    const response = await fetch("http://localhost:8000/posts", {
      cache:"no-store",
      next: { revalidate: 3600 },
    });
    const getPost = response.json();
    if (!getPost) {
      throw new Error("Could not retrieve data");
    }
    return getPost;
  } catch (err) {
    throw new Error("info not found");
  }
};

const PostList = async () => {
  const usersPost = await getAllPost();
  return (
    <>
      {usersPost &&
        usersPost.map((post: postData, index: number) => (
          <div key={index} className="text-black">
            <div key={post.id} className="bg-blue-500 mx-10 rounded-xl my-4">
              <h1 className="px-4 pt-2">{post.title}</h1>
              <p className="my-4 px-4 truncate">{post.body ? post.body : 'The body content will come soon.'}</p>
              <button className="m-4 bg-blue-300 p-3 rounded-md">
                <Link href={`/allPost/${post.id}`}>
                  View More
                </Link>
              </button>
            </div>
          </div>
        ))}
    </>
  );
};
export default PostList;
