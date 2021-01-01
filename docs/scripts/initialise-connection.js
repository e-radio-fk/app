/*
 * This is socket.io initialisation script.
 * It handles basic socket.io initialisation and should be imported
 *      both by client and broadcast-server before actually doing anything.
 * 
 * More info can be found here: https://gabrieltanner.org/blog/webrtc-video-broadcast
 */

const port = 4000;

// app.use(express.static(__dirname + "/public"));

io.sockets.on("error", e => console.log(e));
server.listen(port, () => console.log(`Server is running on port ${port}`));

/*
 * Create the connection (the one that will be between broadcaster and client)
 */

let broadcaster

io.sockets.on("connection", socket => {
  socket.on("broadcaster", () => {
    broadcaster = socket.id;
    socket.broadcast.emit("broadcaster");
  });
  socket.on("watcher", () => {
    socket.to(broadcaster).emit("watcher", socket.id);
  });
  socket.on("disconnect", () => {
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
});

/*
 * WebRTC connection events
 */
socket.on("offer", (id, message) => {
    socket.to(id).emit("offer", socket.id, message);
});
socket.on("answer", (id, message) => {
  socket.to(id).emit("answer", socket.id, message);
});
socket.on("candidate", (id, message) => {
  socket.to(id).emit("candidate", socket.id, message);
});