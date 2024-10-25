
import express from 'express'

import { createPage, deletePage, readPage, updatePage } from '../controller/pageController.js'

const router = express.Router()

router.post('/', createPage)

router.get('/', readPage)

router.put('/', updatePage)

router.delete('/', deletePage)

export default router
