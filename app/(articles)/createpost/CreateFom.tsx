"use client";
import { addComment } from "../../services/actions/comment";
import Button from "../../components/Button";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import React from "react";
interface commentInfo {
  userId: number;
  it: string;
  title: string;
  body: string;
}
const CreateNewPost = (props: commentInfo) => {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const results = await addComment(formData);
      console.log("the result is >>>", results);
      if (!results) alert("Failed to post the comment");
      router.push("/allPost");
    } catch (error) {
      console.log("Error in Submitting the Comment");
    }
  };

  return (
    <form ref={ref} onSubmit={handleSubmit} className="text-center my-auto">
      <input
        className="text-black border-2 my-2 text-center"
        type="number"
        name="userId"
        placeholder="userId"
        value={props.userId}
      />
      <br />
      <input
        className="text-black border-2 text-center"
        type="text"
        placeholder="pet"
        name="it"
      />
      <br />
      <input
        className="text-black border-2 my-2 text-center"
        placeholder="title"
        type="text"
        name="title"
      />
      <br />
      <input
        className="text-black border-2 text-center"
        type="text"
        placeholder="the goes here"
        name="body"
      />
      <br />
      <Button AddPost="Add Post" saving="Saving..." />
    </form>
  );
};
export default CreateNewPost;
