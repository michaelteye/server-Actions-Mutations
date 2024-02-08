// DeleteButton.tsx
import { deletePost } from "./action"; 
import { useRouter } from "next/navigation";
import React from 'react'; // Import React

const DeleteButton = ( id: string ) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            await deletePost(id);
            router.push('/allPost');
        } catch (error) {
            console.error("Error deleting post:", error);
            // Handle any error if necessary
        }
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteButton;
