import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Allow all origins for testing
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});
// let id = -1;
let sockets=new Map();
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on("current_position", (data) => {
        // const {latitude, longitude} = data;
        const newData = {socketId: socket.id, ...data}
        // console.log(newData)
        sockets.set(socket.id, newData)
        // console.log(sockets)
        // console.log(sockets.values())

        socket.on('disconnect', () => {
            console.log('User disconnected');
            sockets.delete(socket.id);
        });
        
        io.emit("recieve_location", Array.from(sockets.values()))
    })

    
});

server.listen(3000, () => {
    console.log('Server running at http://192.168.1.34:3000'); // Change if necessary
});
