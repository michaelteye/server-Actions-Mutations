import { getPost } from "@/app/api/api";
import Link from "next/link";

export default async function PostDetails({
  params: { postId },
}:{
  params: {
    postId: string;
  };
}) {
  const post = await getPost(postId);
  console.log("the post is>>", post);
  return (
    <>
      <div className="">
        <div className="text-center bg-teal-600 p-6 m-4">
          <h1 className="text-black">{post.title}</h1>
          <p className="text-black">{post.body}</p>
          <div className="flex pt-4 justify-center space-x-8">
            <Link className="bg-white text-blue-400 p-4 rounded-md" href={`/${postId}`}>
              Edit
            </Link>
            <Link className="bg-white text-blue-400 p-4 rounded-md" href={``}>
              delete
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
