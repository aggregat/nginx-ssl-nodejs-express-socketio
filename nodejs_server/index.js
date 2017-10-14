const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.get('/',
        (req, res) => {
          res.sendfile(path.join(__dirname, 'index.html'));
        });

io.on('connection',
      (socket) => {
        console.log('connection established');
        socket.emit('hello', 'world');
      });

server.listen(8080,
              () => {
                console.log('Listening on port 8080');
              });
