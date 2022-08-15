const Router = require('express')
const router = new Router()
const chartUSOController = require('../controllers/chartUSOController')

router.post('', chartUSOController.createChartUSO)
router.get('', chartUSOController.getChartUSO)
//router.put('', chartUSOController.updateChart)

module.exports = router