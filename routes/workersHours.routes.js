const Router = require('express')
const router = new Router()
const workerHoursController = require('../controllers/workerHoursController')

router.post('', workerHoursController.createWorkerHours)
router.get('', workerHoursController.getWorkerHours)
router.put('', workerHoursController.updateHoursWorker)
module.exports = router