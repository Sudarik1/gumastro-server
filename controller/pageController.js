
import Page from '../model/pageSchema.js'

const createPage = async (req, res) => {
    try{
        const newPage = await Page.create({
            title: req.body.title,
            content: req.body.content
        })
        console.log(`new page successfully created new page looks like ${JSON.stringify(newPage)}`)
    }
    catch(error){
        console.error(`during creating page error occured: ${error.message}`)
    }
}

const readPage = async (req, res) => {
    try{
        const page = await Page.find()
        res.status(200).json(page)
    }
    catch (error){
        console.error(`during reading of the page the following error occured: ${error.message}`)
    }
}

const updatePage = async (req, res) => {
    try{
        const { _id, title, content } = req.body
        const updatedPage = await Page.updateOne(
            {
                _id: _id
            },
            {
                title:title,
                content:content
            }
        )
        console.log(`page successfully updated your new page looks like: ${JSON.stringify(updatedPage)}`)
    }
    catch (error){
        console.error(`during updating of the page the following error occured: ${error.message}`)
    }
}

const deletePage = async (req, res) => {
    try{
        const isPageDeleted = await Page.deleteOne(
            {
                _id: req.body._id
            }
        )
        console.log(isPageDeleted) 
    }
    catch(error){
        console.error(`during deleting page the following error occured: ${message.error}`)
    }
}

export { createPage, readPage, updatePage, deletePage }