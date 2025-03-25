 interface IComment {
    _id?: string;
    threadId: string;  
    authorId: string;  
    content: string;
    likes?: number;
    dislikes?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export default IComment;