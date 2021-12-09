const path = require('path')

module.exports = (req, res) => {
    if (req.query.username) {
        res.status(200).sendFile(path.resolve('./views/game.html'))
    } else {
        res.status(200).send('You need an username to play, of course.')
    }
}