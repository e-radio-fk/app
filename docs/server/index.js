const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const io = require("socket.io-client")(3000, {
//     path: "/stream",
// });

// io.on("connection", (socket) => {
//     socket.emit("hi", "everyone");
// });

// io.on("disconnect", (reason) => {
//     console.log(reason);
// });