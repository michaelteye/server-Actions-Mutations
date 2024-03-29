import { postDataProps } from "../types/post"
const baseUrl = 'http://localhost:8000/posts'


export const AddPost = async (formData:FormData) =>{
    const userId = formData.get('userId');
    const it = formData.get('it')
    const title = formData.get('title')
    const body = formData.get('body')
    try{
        const response = await fetch(`http://localhost:8000/posts`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({userId, it, title, body})
        })
        if(!response.ok){
            throw new Error("Server error")

        }
        const results = response.json()
        return results

    }
    catch(err:any){
        throw new  Error(err.message)
    }
}
export const getAllPost = async () =>{
    try{
        const response = await fetch(`${baseUrl}`,{
            cache:"no-store",
            next:{ revalidate:0 } ,
        });
        const posts = response.json() 
        if(!posts){
            throw new Error("Could not retrieve data")
        }
        return posts
    }catch(err){
        console.log("Info not found")
    }
}
export const getPost = async(id:string):Promise<postDataProps | undefined> =>{
    try{
        const response = await fetch(`${baseUrl}/${id}`,{cache: "no-store",})
        if(!response){
            throw new Error("Failed to fetch post");
        }
        const post = await response.json();
        return post;
    }
    catch(err){
        console.error(err)
    }
}

export const editPost = async(post:postDataProps): Promise <postDataProps | undefined> =>{
    const response  = await fetch(`${baseUrl}/${post.id}`, {
        method:'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(post)
    })
    const updatePost = response.json()
    return updatePost;
}

export const deletePost = async(id:string):Promise<void>=>{
    await fetch(`${baseUrl}/${id}`,{
        method:'DELETE'
    })
}







