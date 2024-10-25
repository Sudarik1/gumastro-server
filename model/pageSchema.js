
import { Schema, model } from 'mongoose'

const PageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true 
    }
})

const Page = model('page', PageSchema)

export default Page