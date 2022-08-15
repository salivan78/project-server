const {model, Schema, ObjectId} = require('mongoose')


const Year = new Schema({
    name: {type: String},
    /*parent: {type: ObjectId, ref: 'File'},*/
    childs: [{type: ObjectId, ref: 'DataChart'}]
})

module.exports = model('Year', Year)