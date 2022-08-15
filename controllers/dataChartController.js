const mongoose = require('mongoose')
const DataChartOld = require('../models/DataChartOld')
const DepartmentOld = require('../models/DepartmentOld')
const Year = require('../models/Year')

class dataChartController {

    async createYearDepartment(req, res) {
        try {
            const {department, parent} = req.body;
            const candidate = await DataChartOld.findOne({department, parent})
            const yearCandidate = await Year.findOne({name: parent})

            if (candidate) {
                return res.status(400).json({message: `Период ${parent} уже существует`})
            }

            const year = new Year({name: parent})

            if (!yearCandidate) {
                await year.save()
                //console.log(year)
                //return res.status(400).json({message: `Период ${parent} был добавлен`})
            }
            //
            const yearData = new DataChartOld({
                department,
                parent,
                volJan: 0,
                hourJan: 0,
                volFeb: 0,
                hourFeb: 0,
                volMar: 0,
                hourMar: 0,
                volApr: 0,
                hourApr: 0,
                volMay: 0,
                hourMay: 0,
                volJun: 0,
                hourJun: 0,
                volJul: 0,
                hourJul: 0,
                volAug: 0,
                hourAug: 0,
                volSep: 0,
                hourSep: 0,
                volOct: 0,
                hourOct: 0,
                volNov: 0,
                hourNov: 0,
                volDec: 0,
                hourDec: 0
            })

            await yearData.save()
            return res.json(year)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getDepartment(req, res) {
        try {
            const {department} = req.params;
            const [prevYear, curYear] = req.query.parent
            if (!department) {
                res.status(400).json({message: 'department отсутствует'})
            }
            //const dep = await Department.findOne({name: department})
            const dep = await DepartmentOld.find({})

            //const prev = await DataChart.findOne({departmentID: req.params, parent: prevYear})
            const prev = await DataChartOld.findOne({department: department, parent: prevYear}).populate({path: 'departmentID'})
            const cur = await DataChartOld.findOne({department: department, parent: curYear}).populate('departmentID', 'name')
            const yearsWorker = await Year.find().select('name')

            console.log(dep)
            return res.json({
                // department: {
                //     id: dep.id,
                //     name: dep.name,
                //     nameRus: dep.nameRus,
                //     datacharts: dep.datacharts
                // },
                prev,
                cur,
                yearsWorker
            })
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async updateDataChart(req, res) {
        try {
            const {
                volJan,
                hourJan,
                volFeb,
                hourFeb,
                volMar,
                hourMar,
                volApr,
                hourApr,
                volMay,
                hourMay,
                volJun,
                hourJun,
                volJul,
                hourJul,
                volAug,
                hourAug,
                volSep,
                hourSep,
                volOct,
                hourOct,
                volNov,
                hourNov,
                volDec,
                hourDec
            } = req.body
            const data = await DataChartOld.findByIdAndUpdate(req.query.id, {
                volJan,
                volFeb,
                volMar,
                volApr,
                volMay,
                volJun,
                volJul,
                volAug,
                volSep,
                volOct,
                volNov,
                volDec,
                hourJan,
                hourFeb,
                hourMar,
                hourApr,
                hourMay,
                hourJun,
                hourJul,
                hourAug,
                hourSep,
                hourOct,
                hourNov,
                hourDec
            }, {new: true})
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Update error"})
        }
    }
}

module.exports = new dataChartController()