import { io } from "socket.io-client";

const socket = io("/stream", {
    reconnection: true
});

socket.on("hi", (...args) => {
    console.log(args);
});

socket.connect();