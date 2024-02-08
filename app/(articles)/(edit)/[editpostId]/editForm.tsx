import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { editPost } from "@/app/api/api";
import Button from "../../../components/Button";
import { postDataProps } from "@/app/types/post";

export interface EditPostProps {
  id: string; // Add id prop for identifying the post
  userId: number;
  it: number;
  title: string;
  body: string;
}



const EditPost: React.FC<EditPostProps> = ({ id,userId, it, title, body }) => {
  const [formData, setFormData] = useState<postDataProps>({
    id,
    userId,
    it,
    title,
    body,
  });

  useEffect(() => {
    setFormData({ id, userId, it, title, body });
  }, [id, userId, it, title, body]);



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   const router = useRouter();

    e.preventDefault();
    try {
      await editPost(formData); // Pass formData with id to editPost function
      router.push("/allPost");
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) =>({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
    <p className="text-black">form here</p>
    <form onSubmit={handleSubmit} className="text-center my-auto">
      <input
        className="text-black border-2 my-2 text-center"
        type="number"
        name="userId"
        placeholder="userId"
        value={formData.userId}
        onChange={handleChange}
      />
      <br />
      <input
        className="text-black border-2 text-center"
        type="text"
        placeholder="pet"
        name="it"
        value={formData.it}
        onChange={handleChange}
      />
      <br />
      <input
        className="text-black border-2 my-2 text-center"
        placeholder="title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <input
        className="text-black border-2 text-center"
        type="text"
        placeholder="the goes here"
        name="body"
        value={formData.body}
        onChange={handleChange}
      />
      <br />
      <Button AddPost="Add Post" saving="Saving..." />
    </form>
    </>

  );
};

export default EditPost;
