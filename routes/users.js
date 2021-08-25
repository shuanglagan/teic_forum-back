import express from 'express'
import auth from '../middleware/auth.js'
import {
  register,
  login,
  logout,
  extend,
  getuserinfo
} from '../controllers/users.js'

const router = express.Router()

router.post('/', register)
router.get('/', auth, getuserinfo)
router.post('/login', login)
router.delete('/logout', auth, logout)
router.post('/extend', auth, extend)

export default router
