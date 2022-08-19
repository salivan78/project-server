const mongoosePaginate = require('mongoose-paginate-v2')
const {model, Schema} = require('mongoose')

const News = new Schema({
    media: {type: String, default:''},
    date: {type: Date, default: Date.now()},
    heading: {type: String, default:''},
    text: {type: String, default:''}
})

News.plugin(mongoosePaginate)

module.exports = model('News', News)