const Router = require('express')
const router = new Router()
const commentController = require('../controllers/commentController')

router.post('', commentController.createComment)
router.get('', commentController.getComment)
router.get('/current', commentController.getCurrentComment)
router.put('', commentController.updateComment)

module.exports = router