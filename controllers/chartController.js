const mongoose = require('mongoose')
const Department = require('../models/Department')
const Chart = require('../models/Chart')
const Comments = require('../models/Comments')

class chartController {

    async createDepartment(req, res) {
        try {
            const {name, year, nameRus} = req.body;
            const departmentName = await Department.findOne({name})

            if (!departmentName) {
                const department = new Department({name, nameRus})
                const chart = new Chart({department: department._id, year})
                const commentJan = new Comments({chart: chart._id, year, month: 'Jan'})
                const commentFeb = new Comments({chart: chart._id, year, month: 'Feb'})
                const commentMar = new Comments({chart: chart._id, year, month: 'Mar'})
                const commentApr = new Comments({chart: chart._id, year, month: 'Apr'})
                const commentMay = new Comments({chart: chart._id, year, month: 'May'})
                const commentJun = new Comments({chart: chart._id, year, month: 'Jun'})
                const commentJul = new Comments({chart: chart._id, year, month: 'Jul'})
                const commentAug = new Comments({chart: chart._id, year, month: 'Aug'})
                const commentSep = new Comments({chart: chart._id, year, month: 'Sep'})
                const commentOct = new Comments({chart: chart._id, year, month: 'Oct'})
                const commentNov = new Comments({chart: chart._id, year, month: 'Nov'})
                const commentDec = new Comments({chart: chart._id, year, month: 'Dec'})
                await department.save()
                await chart.save()
                await commentJan.save()
                await commentFeb.save()
                await commentMar.save()
                await commentApr.save()
                await commentMay.save()
                await commentJun.save()
                await commentJul.save()
                await commentAug.save()
                await commentSep.save()
                await commentOct.save()
                await commentNov.save()
                await commentDec.save()

                return res.json({message: `Подразделение ${name} с именем ${nameRus} и годом ${year} добавлено`})
            } else {
                const dep = await Department.findOne({name})
                const yearCandidate = await Chart.findOne({department: dep._id, year})

                if (!yearCandidate) {
                    const chart = new Chart({department: dep._id, year})
                    const commentJan = new Comments({chart: chart._id, year, month: 'Jan'})
                    const commentFeb = new Comments({chart: chart._id, year, month: 'Feb'})
                    const commentMar = new Comments({chart: chart._id, year, month: 'Mar'})
                    const commentApr = new Comments({chart: chart._id, year, month: 'Apr'})
                    const commentMay = new Comments({chart: chart._id, year, month: 'May'})
                    const commentJun = new Comments({chart: chart._id, year, month: 'Jun'})
                    const commentJul = new Comments({chart: chart._id, year, month: 'Jul'})
                    const commentAug = new Comments({chart: chart._id, year, month: 'Aug'})
                    const commentSep = new Comments({chart: chart._id, year, month: 'Sep'})
                    const commentOct = new Comments({chart: chart._id, year, month: 'Oct'})
                    const commentNov = new Comments({chart: chart._id, year, month: 'Nov'})
                    const commentDec = new Comments({chart: chart._id, year, month: 'Dec'})
                    await chart.save()
                    await commentJan.save()
                    await commentFeb.save()
                    await commentMar.save()
                    await commentApr.save()
                    await commentMay.save()
                    await commentJun.save()
                    await commentJul.save()
                    await commentAug.save()
                    await commentSep.save()
                    await commentOct.save()
                    await commentNov.save()
                    await commentDec.save()

                    return res.json({
                        years: {
                            _id: chart._id,
                            year: chart.year
                        },
                        commentJan,
                        commentFeb,
                        commentMar,
                        commentApr,
                        commentMay,
                        commentJun,
                        commentJul,
                        commentAug,
                        commentSep,
                        commentOct,
                        commentNov,
                        commentDec
                    })
                } else {
                    return res.status(400).json({message: `Year ${name} already exist`})
                }
            }
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getDataChart(req, res) {
        try {
            const {name} = req.params;
            const [prevYear, curYear] = req.query.year

            if (!name) {
                res.status(400).json({message: 'Не введено имя'})
            }

            const dep = await Department.findOne({name})

            if (!dep) {
                res.status(400).json({message: 'Данные отсутствуют'})
            }

            const prev = await Chart.findOne({department: dep._id, year: prevYear})
            const cur = await Chart.findOne({department: dep._id, year: curYear})

            if (!prev) {
                res.status(400).json({message: `Данные для ${prevYear} отсутствуют`})
            }
            if (!cur) {
                res.status(400).json({message: `Данные для ${curYear} отсутствуют`})
            }

            const years = await Chart.find({department: dep._id}).select('year')

            return res.json({
                dep: {
                    name: dep.name,
                    nameRus: dep.nameRus
                },
                prev: {
                    _id: prev._id,
                    volumes: prev.volumes,
                    hours: prev.hours,
                    //comments: prev.comments,
                    year: prev.year
                },
                cur: {
                    _id: cur._id,
                    volumes: cur.volumes,
                    hours: cur.hours,
                    //comments: cur.comments,
                    year: cur.year
                },
                years
            })
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async updateChart(req, res) {
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
            const data = await Chart.findByIdAndUpdate(req.query.id, {
                volumes: {
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
                    volDec
                },
                hours: {
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
                }
            }, {new: true})
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Update error"})
        }
    }
}

module.exports = new chartController()