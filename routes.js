const { Router } = require('express')
const router = Router()

router.get('/', require('./controllers/index.controller'))

router.get('/game', require('./controllers/game.controller'))

module.exports = router