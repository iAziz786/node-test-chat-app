const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('welcomeMessage', {
    name: 'Aziz',
  });

  socket.broadcast.emit('newUserJoin', {
    name: 'Aziz'
  });

  socket.on('createMessage', (message) => {
    console.log('Create Message', message);

    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: message.createdAt
    });
  });

  socket.on('disconnect', (socket) => {
    console.log('Disconnected from new user');
  });
});

server.listen(port, () => {
  console.log(`App is running on port ${port}`);
})
