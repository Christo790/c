const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Store messages in an array
const messages = [];

// Socket.io event handling
io.on('connection', socket => {
  console.log('A user connected');

  // Send all existing messages to the client
  socket.emit('initialMessages', messages);

  // Handle new messages from clients
  socket.on('newMessage', message => {
    // Store the new message
    messages.push(message);

    // Broadcast the new message to all connected clients
    io.emit('broadcastMessage', message);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

http.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
