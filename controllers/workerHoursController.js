const mongoose = require('mongoose')
const Hours = require('../models/Hours')

class workerHoursController {

    async createWorkerHours(req, res) {
        try {
            const {year} = req.body;
            const candidate = await Hours.findOne({year})

            if (candidate) {
                return res.status(400).json({message: `Период ${year} уже существует`})
            }

            const hours = new Hours({year})
            await hours.save()
            return res.json({
                years: {
                    _id: hours._id,
                    year: hours.year
                },
                hours
            })
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getWorkerHours(req, res) {
        try {
            const hours = await Hours.findOne({year: req.query.year})
            const years = await Hours.find().select('year')

            return res.json({hours, years})
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async updateHoursWorker(req, res) {
        try {
            const {
                hoursWorkerJan,
                hoursWorkerFeb,
                hoursWorkerMar,
                hoursWorkerApr,
                hoursWorkerMay,
                hoursWorkerJun,
                hoursWorkerJul,
                hoursWorkerAug,
                hoursWorkerSep,
                hoursWorkerOct,
                hoursWorkerNov,
                hoursWorkerDec
            } = req.body
            const data = await Hours.findByIdAndUpdate(req.query.id, {
                hoursWorkerJan,
                hoursWorkerFeb,
                hoursWorkerMar,
                hoursWorkerApr,
                hoursWorkerMay,
                hoursWorkerJun,
                hoursWorkerJul,
                hoursWorkerAug,
                hoursWorkerSep,
                hoursWorkerOct,
                hoursWorkerNov,
                hoursWorkerDec
            }, {new: true})
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Update error"})
        }
    }
}

module.exports = new workerHoursController()