const { Router } = require('express')
const router = Router()

router.get('/', require('./controllers/index.controller'))

module.exports = router