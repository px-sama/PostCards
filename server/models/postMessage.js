import mongoose from "mongoose";

// Define post message db shcema
// Design requirement

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()

    },
})

const PostMessage = mongoose.model('postMessage', postSchema)

export default PostMessage