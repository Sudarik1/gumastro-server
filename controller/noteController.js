
import Note from "../model/noteSchema.js";

const createNote = async (req, res) => {
    try{
        const newNote = await Note.create({
            title: req.body.title,
            body: req.body.body
        })
        console.log(`note successfully added added note looks like ${JSON.stringify(newNote)}`)
    }
    catch(error){
        console.error(`during creating note the following error occured: ${message.error}`)
    }
}

const readNote = async (req, res) => {
    try{
        const note = await Note.find()
        res.status(200).json(note)
    }
    catch(error){
        console.error(`during reading note the following error occured: ${message.error}`)
    }
}

const updateNote = async (req, res) => {
    try{
        const { _id, title, body} = req.body
        console.log( _id, title, body )
        const updatedNote = await Note.updateOne(
            {
                _id: _id
            },
            {
                title: title,
                body: body
            }
        )
        console.log(`note successfully updated result looks like ${JSON.stringify(updatedNote)}`)
    }
    catch(error){
        console.error(`during updating note the following error occured: ${message.error}`)
    }
}

const deleteNote = async (req, res) => {
    try{
        const isNoteDeleted = await Note.deleteOne(
            {
                _id: req.body._id
            }
        )
        console.log(isNoteDeleted) 
    }
    catch(error){
        console.error(`during deleting note the following error occured: ${message.error}`)
    }
}

export { createNote, readNote, updateNote, deleteNote }