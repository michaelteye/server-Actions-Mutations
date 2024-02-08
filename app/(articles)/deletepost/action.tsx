import { revalidatePath } from "next/cache";


export async function deletePost(id:string):Promise<void>{
    try{
       await fetch(`http://localhost:8000/posts/${id}`,{
            method:'DELETE'
        });
        
    }
    catch(error){
        console.error('Error deleting post:', error)
        
    }
}
    
