// Project: Dungeons (by RedCursed)

const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const data = require('./data')

dotenv.config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())

app.use('/', require('./routes'))

io.on('connection', (socket) => {
    data.users.push({
        id: socket.id,
        username: socket.handshake.query.username
    })

    io.emit('player-join', {
        id: socket.id,
        username: socket.handshake.query.username
    })
})

server.listen(3000, () => {
    console.log('Application is running on localhost:3000')
})