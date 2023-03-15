
import Router from 'express';
const router = new Router()
import { create, getAll } from '../controllers/brandController'

router.post('/', create)
router.get('/', getAll)

export default router