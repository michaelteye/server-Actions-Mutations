'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
interface userProps{
    id:string
}
export default function DeleteBtn( {id}:userProps){
    const router = useRouter()
    const removeTopic =  async ()=>{
        const confirmed = confirm("Are you sure to delete this Post ?")
        if(confirmed) {
            const res = await fetch(`http://localhost:8000/posts/${id}`,{
                method:'DELETE',
            });
            if(res.ok){
                console.log('the id is deleted successfully')
                router.push('/posts')
            }
        }
    }
  return (
    <>
        <button 
        onClick={removeTopic}
        className='text-black'>
            DELETE POST
        </button>
    </>
  )
}

