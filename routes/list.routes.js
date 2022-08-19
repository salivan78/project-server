const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/auth.middleware')
const listController = require('../controllers/listController')

router.post('', authMiddleware, listController.createList)
router.put('', authMiddleware, listController.updateList)
router.get('', authMiddleware, listController.getAll)
router.get('/:name', authMiddleware, listController.getList)

module.exports = router