
import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

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

export const updatePost=async(req,res )=>{
    //recuperer le id de la requete pui rename id to _id 
    const{id:_id}=req.params;
    const post=req.body;

    //check if _id is valid on Mongoose model
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    //we receive id and the updated post come from req.body
    //new:true to confirm those data received are up-to-date
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
    res.json(updatePost)
}

export const deletePost =  async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await PostMessage.findByIdAndRemove(id);
    res.json({message:'Post deleted successfully'});
}

export const likePost =async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

   const  post =await PostMessage.findById(id);

    const updatedPost= await PostMessage.findByIdAndUpdate(id,{likeCount: post.likeCount+1},{new :true});

    res.json(updatePost);


}