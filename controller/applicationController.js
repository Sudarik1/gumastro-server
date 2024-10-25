
import Application from "../model/applicationSchema.js";

const createApplication = async (req, res) => {
    try{
        const newApplication = await Application.create({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone 
        })
        console.log(`new application successfully created application looks like ${JSON.stringify(newApplication)}`)
    }
    catch(error){
        console.error(`during creating application the following error occured: ${message.error}`)
    }
}

const readApplication = async (req, res) => {
    try{
        const application = await Application.find()
        res.status(200).json(application)
    }
    catch(error){
        console.error(`during reading application the following error occured: ${message.error}`)
    }
}

export { createApplication, readApplication }