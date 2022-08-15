const Router = require('express')
const router = new Router()
const chartController = require('../controllers/chartController')

router.post('', chartController.createDepartment)
router.get('/:name', chartController.getDataChart)
router.put('', chartController.updateChart)

module.exports = router