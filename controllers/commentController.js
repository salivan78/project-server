const mongoose = require('mongoose')
const Chart = require('../models/Chart')
const Comments = require('../models/Comments')

class commentController {

    async createComment(req, res) {
        try {
            const {year, month, comment} = req.body;
            const candidate = await Comments.findOne({year, month})

            if (!candidate) {
                const chart = await Chart.findOne({_id: req.query.id})
                const com = new Comments({chart: chart._id, year, month, comment})
                await com.save()

                return res.json(com)
            } else {
                return res.status(400).json({message: `Year and Month already exist`})
            }
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getComment(req, res) {
        try {
            const chart = await Chart.findById(req.query.id)
            const comment = await Comments.find({chart: chart._id, year: req.query.year})
            if (!comment) {
                res.status(400).json({message: 'Данные отсутствуют'})
            }

            return res.json(comment)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getCurrentComment(req, res) {
        try {
            const comment = await Comments.findOne({chart: req.query.id, year: req.query.year, month: req.query.month})
            if (!comment) {
                res.status(400).json({message: 'Данные отсутствуют'})
            }

            return res.json(comment)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async updateComment(req, res) {
        try {
            const {comment} = req.body
            const commentId = await Comments.findByIdAndUpdate(req.query.id, {comment}, {new: true})

            return res.json(commentId)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Update error"})
        }
    }
}

module.exports = new commentController()