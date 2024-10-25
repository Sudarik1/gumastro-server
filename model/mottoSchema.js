
import { Schema, model } from 'mongoose'

const mottoSchema = new Schema({
    motto: {
        type: String,
        required: true
    }
})

const Motto = model('motto', mottoSchema)

export default Motto