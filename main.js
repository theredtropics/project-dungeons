// Project: Dungeons (by RedCursed)

const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())

server.listen(3000, () => {
    console.log('Application is running on localhost:3000')
})