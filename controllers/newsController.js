//const Uuid = require('uuid')
const fs = require('fs')
const moment = require('moment')
const config = require('config')
const News = require('../models/News')

class newsController {

    async createNews(req, res) {
        try {
            const {heading, text} = req.body;
            const date = moment()
            const news = new News({date, heading, text})
            await news.save()
            return res.json(news)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getNews(req, res) {
        try {
            if (!req.query.id) {
                const {page, limit} = req.query;
                const options = {
                    page: parseInt(page, 10) || 1,
                    limit: parseInt(limit, 10) || 10,
                    sort: {date: -1},
                }
                const news = await News.paginate({}, options)
                return res.json(news)
            }
            const currentNews = await News.findById(req.query.id)
            return res.json(currentNews)
        } catch (e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async updateNews(req, res) {
        try {
            const {heading, text} = req.body
            const data = await News.findByIdAndUpdate(req.query.id, {heading, text}, {new: true})
            return res.json(data)
        } catch (e) {
            console.log(e)
            return res.status(500).json({message: "Update error"})
        }
    }

    async deleteNews(req, res) {
        try {
            const news = await News.findById(req.query.id)
            if (!news) {
                return res.status(400).json({message: "News not found"})
            }
            await news.remove()
            return res.json({message: "Новость удалена"})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "News is not empty"})
        }
    }

    async uploadNewsImage(req, res) {
        try {
            const media = req.files.file
            const news = await News.findById(req.query.id)
            console.log(news)
            //const newsImageName = Uuid.v4() + ".jpg"
           // media.mv(config.get('staticPath') + "\\" + newsImageName)
            //news.media = newsImageName
            await news.save()
            return res.json(news)
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Upload NewsImage error"})
        }
    }

    async deleteNewsImage(req, res) {
        try {
            const news = await News.findById(req.query.id)
            fs.unlinkSync(config.get('staticPath') + "\\" + news.media)
            news.media = null
            await news.save()
            return res.json(news)
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: "Delete NewsImage error"})
        }
    }
}

module.exports = new newsController()