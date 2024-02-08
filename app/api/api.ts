import { postDataProps } from "../types/post"
const baseUrl = 'https://jsonplaceholder.typicode.com/posts'


export const getAllPost = async () =>{
    try{
        const response = await fetch(`${baseUrl}`,{
            cache:"no-store",
            next:{ revalidate:3600},
        });
        const posts = response.json() 
        if(!posts){
            throw new Error("Could not retrieve data")
        }
        return posts
    }catch(err){
        throw new Error("Info not found")
    }
}

export const getPost = async(id: string):Promise<postDataProps> =>{
    const response = await fetch(`${baseUrl}/${id}`)
    const post = await response.json();
    return post;
}

export const editPost = async(post:postDataProps): Promise <postDataProps | undefined >=>{
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







