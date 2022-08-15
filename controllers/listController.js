const mongoose = require('mongoose')
const List = require('../models/List')

class ListController {
    async createList(req, res) {
        try {
            const {name, date, nameProduct, weight, location, incongruity, reason, usage, department, sum, article, nameGuilty, correction, nameCorrection} = req.body
            const candidate = await List.findOne({name})

            if(candidate) {
                return res.status(400).json({message: `Лист с номером ${name} уже существует`})
            }

            const list = new List({name, date, nameProduct, weight, location, incongruity, reason, usage, department, sum, article, nameGuilty, correction, nameCorrection})
            await list.save()
            return res.json(list)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async updateList(req, res) {
        try {
            const {nameProduct, weight, location, incongruity, reason, usage, department, sum, article, nameGuilty, correction, nameCorrection, added, monthfdp} = req.body
            const list = await List.findByIdAndUpdate(req.query.id,{nameProduct, weight, location, incongruity, reason, usage, department, sum, article, nameGuilty, correction, nameCorrection, added, monthfdp}, {new: true})
            return res.json(list)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Update error"})
        }
    }

    async getAll(req, res) {
        try {
            const {page, limit} = req.query;
            const options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(limit, 10) || 10,
                sort: {name: -1},
            }
            const lists = await List.paginate({}, options)
            return res.json(lists)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getList(req, res) {
        try {
            const {name} = req.params
            if (!name) {
                res.status(400).json({message: 'name отсутствует'})
            }
            const list = await List.findOne({name: name})
            return res.json(list)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }
}

module.exports = new ListController()