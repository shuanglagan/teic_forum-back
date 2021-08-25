import express from 'express'
import auth from '../middleware/auth.js'
import upload from '../middleware/upload.js'

import {
  newPost,
  getPost,
  editPost
} from '../controllers/posts.js'

const router = express.Router()

router.post('/', auth, upload, newPost)
router.get('/', getPost)
router.patch('/:id', auth, upload, editPost)

export default router
