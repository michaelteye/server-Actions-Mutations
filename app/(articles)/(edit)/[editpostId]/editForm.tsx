'use client'
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { editPost } from "@/app/api/api";

interface EditPostProps {
  id: string;
  userId: number;
  it: number;
  title: string;
  body: string;
}

const EditPostForm: React.FC<EditPostProps> = ({ id, userId, it, title, body }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<EditPostProps>({
    id: "",
    userId: 0,
    it: 1,
    title: "",
    body: "",
  });
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setFormData({ id, userId, it, title, body });
  }, [id, userId, it, title, body]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const updatedPostData = { ...formData, id }; // Include the post ID in the updated data
      await editPost(updatedPostData); // Call a function to update the post with the new data
      console.log("Updating post with data:", updatedPostData);
      router.push("/posts"); // After successfully updating the post, redirect to the posts page
    } catch (error) {
      console.error("Error in submitting the form:", error);
    }
  };

  return (
    <form ref={ref} onSubmit={handleSubmit} className="text-center my-auto">
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
      <textarea
        className="text-black border-2 text-center"
        placeholder="the goes here"
        name="body"
        value={formData.body}
        onChange={handleChange}
      />
      <br />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Post
      </button>
    </form>
  );
};

export default EditPostForm;
