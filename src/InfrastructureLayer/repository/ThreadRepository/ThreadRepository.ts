import mongoose from "mongoose";
import IThread from "../../../DomainLayer/ThreadsDomain";
import ThreadRepo from "../../../UsecaseLayer/Interface/ThreadRepo";
import ThreadSchema from "../../database/ThreadSchema";
import IComment from "../../../DomainLayer/CommentsDomain";
import CommentSchema from "../../database/CommentSchema";


class ThreadRepository implements ThreadRepo {


    async addThread(thread:IThread): Promise<IThread | any>{
        try{
            
            const newThread = new ThreadSchema(thread);
            const savedThread = await newThread.save();
            return savedThread;
            
        } catch(error){
            console.log(error)
            return error
        }
    }
    

    async addComment(comment:IComment): Promise<IComment | any>{
        try{
            
            const newComment = new CommentSchema(comment);
            const savedComment = await newComment.save();
            return savedComment;
            
        } catch(error){
            console.log(error)
            return error
        }
    }

    async editComment(comment:IComment): Promise<IComment | any>{
        try{
            
            const updatedComment = await CommentSchema.findByIdAndUpdate(
                comment._id, 
                { $set: { content: comment.content } }, 
                { new: true }  
            );
    
            return updatedComment;
            
        } catch(error){
            console.log(error)
            return error
        }
    }

    async editThread(thread:IThread): Promise<IThread | any>{
        try{
            
            const updatedThread = await ThreadSchema.findByIdAndUpdate(
                thread._id, 
                { $set: { content: thread.content } }, 
                { new: true }  
            );
    
            return updatedThread;
            
        } catch(error){
            console.log(error)
            return error
        }
    }
    

}

export default ThreadRepository;