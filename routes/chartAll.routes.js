const Router = require('express')
const router = new Router()
const chartAllController = require('../controllers/chartAllController')

router.post('', chartAllController.createAllDepartment)
router.get('', chartAllController.getChartAll)
// router.put('', chartAllController.updateChart)

module.exports = router