'use server'
import { redirect } from "next/navigation";

export async function addComment(formData:FormData) {
    const userId = formData.get('userId');
    const it = formData.get('it')
    const title = formData.get('title')
    const body = formData.get('body')
    try{
        const response = await fetch(`http://localhost:8000/posts`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userId, it,title, body})
        })
        const results = await response.json()
        console.log('the response the  server sent back',results);
         return results
        // return results;
    }
    catch(err:any){
        throw new Error('Failed to creat task')
    }
}

