
import express from 'express'

import { createNote, deleteNote, readNote, updateNote } from '../controller/noteController.js'

const router = express.Router()

router.post('/', createNote)

router.get('/', readNote)

router.put('/', updateNote)

router.delete('/', deleteNote)

export default router