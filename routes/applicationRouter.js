
import express from 'express'

import { createApplication, readApplication } from '../controller/applicationController.js'

const router = express.Router()

router.post('/', createApplication)

router.get('/', readApplication)

export default router