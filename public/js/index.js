var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Aziz',
    text: 'You are bad guy'
  })
});

socket.on('disconnect', function () {
  console.log('Disconnected form server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});
