
import express from 'express'

import { createComment, deleteComment, readComment } from '../controller/commentController.js'

const router = express.Router()

router.post('/', createComment)

router.get('/', readComment) 

router.delete('/', deleteComment)

export default router