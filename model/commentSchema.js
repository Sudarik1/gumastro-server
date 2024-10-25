
import { Schema, model } from 'mongoose'

const commentSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const Comment = model('comment', commentSchema)

export default Comment