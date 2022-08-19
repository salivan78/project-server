const {model, Schema, ObjectId} = require('mongoose')


const Year = new Schema({
    name: {type: String},
    childs: [{type: ObjectId, ref: 'DataChart'}]
})

module.exports = model('Year', Year)