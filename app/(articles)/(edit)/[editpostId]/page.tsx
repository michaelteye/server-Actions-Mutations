'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { editPost, getPost } from '@/app/api/api';
import EditPost from './editForm';
import { EditPostProps } from './editForm';

export default function PostEdit({
    params: { editpostId },
}: {
    params: {
        editpostId: string;
    };
}) {
    const [post, setPost] = useState<EditPostProps | null>(null);
    useEffect(() => {
        // Fetch the post data using the editpostId
        const fetchPost = async () => {
            try {
                const postData = await getPost(editpostId);
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [editpostId]);

    return (
        <div>
            <h1 className='text-black'>Edit Post</h1>
            {post ? (
                <EditPost
                    id={editpostId} // Pass the editpostId to the EditPost component
                    userId={post.userId}
                    it={post.it}
                    title={post.title}
                    body={post.body}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
