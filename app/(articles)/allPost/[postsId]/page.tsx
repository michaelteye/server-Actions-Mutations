
import { Inter } from "next/font/google";
import Link from "next/link";
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const inter = Inter({ subsets: ["latin"] });

// params: {
//   postId: aksdjlkjasd
// }

export const revalidate = 3600;

export const generateStaticParams = async () => {
  const data = await fetch("http://localhost:8000/posts", {
    next: {
      revalidate: 3600,
    },
  });
  const posts = await data.json();

  return posts.map((post: PostProps) => ({
    params: {
      postId: post.id.toString(),
    },
  }));
};


const getPost = async (id: string): Promise<PostProps> => {
  const data = await fetch(`http://localhost:8000/posts/${id}`);
  console.log("the data ", data.ok);
  const post = await data.json();
  return post;
};

export default async function PostPage({
  params: { postsId },
}: {
  params: {
    postsId: string;
  };
}){
  // const handleUserDelete = handleDelete()
  const post = await getPost(postsId);
  return (
    <div className="">
      <div className="text-center bg-teal-600 p-6 m-4">
        <h1 className="text-black">{post.title}</h1>
        <p className="text-black">Post ID: {postsId}</p>
        <p className="text-black">{post.body}</p>
        <div className="flex pt-4 justify-center space-x-8">
          <Link className="bg-white text-blue-400 p-4 rounded-md" href={``}>
            Edit
          </Link>
          <Link className="bg-white text-blue-400 p-4 rounded-md" href={``}>
            delete
          </Link>
        </div>
      </div>
    </div>
  );
}
