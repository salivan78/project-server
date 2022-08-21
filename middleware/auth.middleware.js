const jwt = require('jsonwebtoken')
//const config = require('config')
const config = require('../config/config')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        //const decoded = jwt.verify(token, config.get('secretKey'))
        const decoded = jwt.verify(token, config.config.secretKey)
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({message: 'Auth error'})
    }
}