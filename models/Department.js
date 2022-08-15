const {model, Schema, ObjectId} = require('mongoose')

const Department = new Schema({
    name: {type: String, required: true},
    nameRus: {type: String, default: ''},
    charts: [{type: ObjectId, ref: 'Chart'}]
})

module.exports = model('Department', Department)