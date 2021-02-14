// const express = require("express");
// const app = express();

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

// app.use(express.static(__dirname + "/public"));