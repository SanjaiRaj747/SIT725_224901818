const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

let userCount = 0;

io.on('connection', (socket) => {
    userCount++;
    console.log('A user connected. Total users:', userCount);
    
    // Send the updated count to ALL connected clients
    io.emit('user-update', userCount);

    socket.on('disconnect', () => {
        userCount--;
        console.log('A user disconnected. Total users:', userCount);
        io.emit('user-update', userCount);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});