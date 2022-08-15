const {model, Schema, ObjectId} = require('mongoose')

const Comments = new Schema({
    chart: {type: ObjectId, ref: 'Chart'},
    year: {type: String, default: '2020'},
    month: {type: String, default: ''},
    comment: {type: String, default: ''}
})

module.exports = model('Comments', Comments)