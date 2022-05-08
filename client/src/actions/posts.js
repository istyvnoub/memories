import * as api from  '../api'

//Action creators

export const getPosts =()=>async(dispatch)=>{
    try{
        const {data}= await api.fetchPosts();
        dispatch({type:"FETCH_ALL",payload:data});
    }catch(error){
        console.log(error.message);
    }
    

    
}
export const createPosts=(post)=>async(dispatch)=>{
    try {
        const {data}=await api.createPosts(post);
        
        dispatch({type:"CREATE",payload:data});
    } catch (error) {
        console.log(error.message)
    }

}

export const updatePost=(id,post)=>async(dispatch)=>{

    try {
        const {data}= await api.updatePost(id,post);
        dispatch({type:'UPDATE',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost=(id)=>async (dispacth)=>{

    try {

        await api.deletePost(id);

        dispacth({type:'DELETE',payload:id});
        
    } catch (error) {
        console.log(error);
        
    }
}

export const likePost= (id)=>async (dispatch)=>{
    try {
        const {data}= await api.likePost(id);
        dispatch ({type:'UPDATE',payload:data});
        
    } catch (error) {
        console.log(error);
    }
}