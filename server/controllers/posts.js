
import PostMessage from "../models/postMessage.js";

export const getPosts = async(req ,res)=>{

    try{
const postmessages= await PostMessage.find();
console.log(postmessages);
res.status(200).json(postmessages);
    }catch (error){
res.status(404).json({message:error.message});
    }

}

export const createPosts = async(req ,res)=>{
    const {title,message,selectedFile,creator,tags}=req.body;

    const newPost= new PostMessage({title,message,selectedFile,creator,tags});


    try {
        await newPost.save();
        res.status(201).json(newPost);
    }catch(error){
        res.satus(409).json({message:error.message});
    }
}