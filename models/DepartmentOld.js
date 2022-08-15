const {model, Schema, ObjectId} = require('mongoose')

const DepartmentOld = new Schema({
    id: {type: Number, default: null},
    name: {type: String, default: ''},
    nameRus: {type: String, default: ''},
    datacharts: [{type: ObjectId, ref: 'DataChartOld'}]
    //year: [{type: ObjectId, ref: 'Year'}],
})

module.exports = model('DepartmentOld', DepartmentOld)