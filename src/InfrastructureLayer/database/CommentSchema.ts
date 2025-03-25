
  import mongoose, { Schema, Document, Model } from "mongoose";
import IComment from "../../DomainLayer/CommentsDomain";

const commentSchema: Schema<IComment & Document> = new Schema(
    {
      threadId: { type: String, required: true, ref: 'Thread' }, 
      authorId: { type: String, required: true, ref: 'User' },  
      content: { type: String, required: true },
      likes: { type: Number, default: 0 },
      dislikes: { type: Number, default: 0 },
    },
    { timestamps: true }  
  );

const Comment: Model<IComment & Document> = mongoose.model<IComment & Document>(
     "Comment",
      commentSchema
);

export default Comment;
