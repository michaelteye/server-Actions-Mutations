'use server'
import React from 'react'

const DeletePost = async(id:string) => {
  try{

    const response = await fetch(`http://localhost:8000/posts/${id}`,
    {
        method:'DELETE'
    })
   if(!response.ok){
    throw new Error('Failed to delete a user.')
   }
   return true;

  }catch(err){
    console.error('the error is ', err)
    return false;
  }
    
}
export default DeletePost

