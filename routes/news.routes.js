const Router = require('express')
const router = new Router()
const newsController = require('../controllers/newsController')

router.post('', newsController.createNews)
router.get('', newsController.getNews)
router.put('', newsController.updateNews)
router.delete('/', newsController.deleteNews)
router.post('/newsImage', newsController.uploadNewsImage)
router.delete('/deleteImage', newsController.deleteNewsImage)
module.exports = router