'use client'
import { useEffect, useState } from "react";
import { getPost } from "@/app/api/api";
import EditPostForm from "./editForm";

interface PostData {
  id: string;
  userId: number;
  it: number;
  title: string;
  body: string;
}

export default function EditPost({ params: { editpostId } }: { params: { editpostId: string } }) {
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await getPost(editpostId);
        if (post) {
          setPostData(post);
        } else {
          console.error("Failed to fetch post");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [editpostId]);

  if (!postData) {
    // Optional: Add loading state
    return null;
  }

  return <EditPostForm {...postData} />;
}
