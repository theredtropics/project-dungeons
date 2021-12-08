const path = require('path')

module.exports = (req, res) => {
    res.status(200).sendFile(path.resolve('./views/index.html'))
}