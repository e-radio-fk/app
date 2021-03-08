const io = require("socket.io-client");

const socket = io("https://e-radio-fk-server-zzhqz.ondigitalocean.app/streaming-server/stream:8080");

socket.on("hello", (...args) => {
    console.log(args);
});