
import Comment from "../model/commentSchema.js";

const createComment = async (req, res) => {
    try{
        const newComment = await Comment.create({
            userName: req.body.userName,
            comment: req.body.comment
        })
        console.log(`comment successfully added comment looks like ${JSON.stringify(newComment)}`)
    }
    catch(error){
        console.error(`during creating comment the following error occured: ${message.error}`)
    }
}

const readComment = async (req, res) => {
    try{
        const comment = await Comment.find()
        res.json(comment)
    }
    catch(error){
        console.error(`during reading comment the following error occured: ${message.error}`)
    }
}

const deleteComment = async (req, res) => {
    try{
        const isCommentDeleted = await Comment.deleteOne(
            {
                _id: req.body._id
            }
        )
        console.log(isCommentDeleted) 
    }
    catch(error){
        console.error(`during deleting comment the following error occured: ${message.error}`)
    }
}

export { createComment, readComment, deleteComment }