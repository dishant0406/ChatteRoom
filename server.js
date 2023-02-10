const express = require('express')
const http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


const socketServer = require('./socketServer/socketServer')

const authRoutes = require('./routes/authRoutes')

const friendInvitationRoutes = require('./routes/friendInvitationRoutes')


const PORT = process.env.PORT || 5000


const app = express()
app.use(express.json());
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/friend-invitation', friendInvitationRoutes);

app.get('/', (req, res) => {

  res.send('hello from simple server :)')

})

const server = http.createServer(app)

socketServer.registerSocketServer(server)




mongoose.connect(process.env.MONGO_URI).then(() => {
  server.listen(PORT, () => console.log('> Server is up and running on port : ' + PORT))
})
  .catch((err) => {
    console.log('Connection Failed')
    console.log(err)
  })