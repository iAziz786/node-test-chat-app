var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected form server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});

socket.on('welcomeMessage', (message) => {
  console.log(message.text, message.from);
});

socket.on('newUserJoin', (message) => {
  console.log(message.text, message.from);
});
