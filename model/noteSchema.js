
import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
})

const Note = model('note', noteSchema)

export default Note