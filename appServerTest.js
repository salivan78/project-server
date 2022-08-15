const express = require('express')
const path = require('path')
const appServer = express()


appServer.use(express.static(path.resolve(__dirname, 'public')))

appServer.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

appServer.listen(3000, () => console.log('Server started'))