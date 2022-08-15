const {model, Schema, ObjectId} = require('mongoose')

const DataChartOld = new Schema({
    //department: {type: String},
    //departmentName: {type: String},
    departmentID: {type: ObjectId, ref: 'Department'},
    parent: {type: String},
    volJan: {type: Number, default: 0},
    hourJan: {type: Number, default: 0},
    volFeb: {type: Number, default: 0},
    hourFeb: {type: Number, default: 0},
    volMar: {type: Number, default: 0},
    hourMar: {type: Number, default: 0},
    volApr: {type: Number, default: 0},
    hourApr: {type: Number, default: 0},
    volMay: {type: Number, default: 0},
    hourMay: {type: Number, default: 0},
    volJun: {type: Number, default: 0},
    hourJun: {type: Number, default: 0},
    volJul: {type: Number, default: 0},
    hourJul: {type: Number, default: 0},
    volAug: {type: Number, default: 0},
    hourAug: {type: Number, default: 0},
    volSep: {type: Number, default: 0},
    hourSep: {type: Number, default: 0},
    volOct: {type: Number, default: 0},
    hourOct: {type: Number, default: 0},
    volNov: {type: Number, default: 0},
    hourNov: {type: Number, default: 0},
    volDec: {type: Number, default: 0},
    hourDec: {type: Number, default: 0},
    comment: {
        commentJan: {type: String, default: 'Нет комментариев'},
        commentFeb: {type: String, default: 'Нет комментариев'},
        commentMar: {type: String, default: 'Нет комментариев'},
        commentApr: {type: String, default: 'Нет комментариев'},
        commentMay: {type: String, default: 'Нет комментариев'},
        commentJun: {type: String, default: 'Нет комментариев'},
        commentJul: {type: String, default: 'Нет комментариев'},
        commentAug: {type: String, default: 'Нет комментариев'},
        commentSep: {type: String, default: 'Нет комментариев'},
        commentOct: {type: String, default: 'Нет комментариев'},
        commentNov: {type: String, default: 'Нет комментариев'},
        commentDec: {type: String, default: 'Нет комментариев'}
    }
})

module.exports = model('DataChart', DataChartOld)