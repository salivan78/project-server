const mongoosePaginate = require('mongoose-paginate-v2')
const {model, Schema, ObjectId} = require('mongoose')

const List = new Schema({
    name: {type: Number, required: true, unique: true}, //название листа
    date: {type: Date, default: Date.now,},
    nameProduct: {type: String, default: ''},
    weight: {type: String, default: '0'},
    location: {type: String, default: ''},
    incongruity: {type: String, default: ''},
    reason: {type: String, default: ''},
    usage: {type: String, default: ''},
    department: {type: String, default: ''},
    sum: {type: String, default: '0'},
    article: {type: String, default: ''},
    nameGuilty: {type: String, default: ''},
    correction: {type: String, default: ''},
    nameCorrection: {type: String, default: ''},
    //user: {type: ObjectId, ref: 'User'}, //ссылка на пользователя, который добавил лист
    //parent: {type: ObjectId, ref: 'List'}, //ссылка на лист???
    //childs: [{type: ObjectId, ref: 'List'}], //ссылка все листы
    added: {type: Boolean, default: false},
    monthfdp: {type: Date},
    path: {type: String, default: ''}, //ссылка на лист
})

List.plugin(mongoosePaginate)

module.exports = model('List', List)