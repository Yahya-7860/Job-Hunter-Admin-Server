import { createServer } from "http";
import { Server } from "socket.io";

let io;

function setupSocketServer(app) {
    const httpServer = createServer(app);
    //!change this url everytime with new network
    io = new Server(httpServer, {
        cors: {
            origin: "http://192.168.217.120:3000",
            methods: ["GET", "POST"],
            credentials: true,
        },
    });

    return { httpServer, io };
}

function getIo() {
    if (!io) {
        throw new Error("Socket.io not initialized yet");
    }
    return io;
}

export { setupSocketServer, getIo };
