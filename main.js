const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)


server.listen(3000, () => {
    console.log('Application is running on localhost:3000')
})