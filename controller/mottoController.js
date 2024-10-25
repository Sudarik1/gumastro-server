
import Motto from "../model/mottoSchema.js";

const readMotto = async (req, res) => {
    try{
        const motto = await Motto.find()
        res.status(200).json(motto)
    }
    catch(error){
        console.error(`during reading motto the following error occured: ${message.error}`)
    }
}

const updateMotto = async (req, res) => {
    try{
        const { _id, motto } = req.body
        const updatedMotto = await Motto.updateOne( 
            {
                _id: _id
            },
            {
                motto: motto
            }
        )
        console.log(req.body)
        console.log(`motto successfully updated result looks like ${JSON.stringify(updatedMotto)}`)
    }
    catch(error){
        console.error(`during updating motto the following error occured: ${message.error}`)
    }
}

export { readMotto, updateMotto }