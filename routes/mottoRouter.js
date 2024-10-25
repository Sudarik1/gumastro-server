
import express from 'express'

import { readMotto, updateMotto } from '../controller/mottoController.js'

const router = express.Router()

router.get('/', readMotto)

router.put('/', updateMotto)

export default router