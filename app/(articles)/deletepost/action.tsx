"use client"
import React from 'react'
import { deletePost } from '@/app/api/api'
import { useRouter } from "next/navigation";

interface HandleDeleteProps {
  postId: string;
}

const HandleDelete:React.FC<HandleDeleteProps> =({ postId })=>{
    const router = useRouter();
  const handleDeletePost = async () =>{
    await deletePost(postId);
    console.log('the task has been deleted savely')
    router.refresh()
    // Handle any additional logic
  };
  return (
    <button
      onClick={handleDeletePost}
      className="bg-white text-blue-400 p-4 rounded-md">
      delete
    </button>
  );
}
export default HandleDelete
