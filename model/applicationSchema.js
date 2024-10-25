
import { Schema, model } from "mongoose";

const applicationSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
})

const Application = model('application', applicationSchema)

export default Application