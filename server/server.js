const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat group.'));

  socket.broadcast.emit('newMessage', generateMessage('Aziz', 'New User Joined.'));

  socket.on('createMessage', (message, callback) => {
    console.log('Create Message', message);

    io.emit('newMessage', generateMessage(message.from, message.text));

    callback('This is from the server');
  });

  socket.on('disconnect', (socket) => {
    console.log('Disconnected from new user');
  });
});

server.listen(port, () => {
  console.log(`App is running on port ${port}`);
})
