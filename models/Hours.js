const {model, Schema, ObjectId} = require('mongoose')

const Hours = new Schema({
    name: {type: String, default: 'worker'},
    nameRus: {type: String, default: 'Часы работников'},
    year: {type: String},
    hoursWorkerJan: {type: Number, default: 0},
    hoursWorkerFeb: {type: Number, default: 0},
    hoursWorkerMar: {type: Number, default: 0},
    hoursWorkerApr: {type: Number, default: 0},
    hoursWorkerMay: {type: Number, default: 0},
    hoursWorkerJun: {type: Number, default: 0},
    hoursWorkerJul: {type: Number, default: 0},
    hoursWorkerAug: {type: Number, default: 0},
    hoursWorkerSep: {type: Number, default: 0},
    hoursWorkerOct: {type: Number, default: 0},
    hoursWorkerNov: {type: Number, default: 0},
    hoursWorkerDec: {type: Number, default: 0}
})

module.exports = model('Hours', Hours)