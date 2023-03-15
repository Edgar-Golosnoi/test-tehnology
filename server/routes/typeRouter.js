
import Router from 'express'
const router = new Router()
import { create, getAll } from '../controllers/typeController'
import checkRole from '../middleware/checkRoleMiddleware'

router.post('/', checkRole('ADMIN'), create)
router.get('/', getAll)

export default router