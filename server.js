const express = require("express");
const app = express();
const path = require("path");
const { Socket } = require("socket.io");
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});
const io = require("socket.io")(server);

let socketsConnected = new Set();
io.on("connection", OnConnected);



function OnConnected(socket) {
  console.log("New user created: ", socket.id);
  socketsConnected.add(socket.id);

  io.emit("client total", socketsConnected.size);

  socket.on("disconnect", () => {
    console.log("User disconnected: " + socket.id);
    socketsConnected.delete(socket.id);
    console.log("remaning users are: " , socketsConnected);
    io.emit("client total", socketsConnected.size);//lenth of the set or total number of clients 
  });


     // Listen for messages from the client
     //and emit to all the clients

  socket.on('message',(data)=>{
    console.log(data);
    socket.broadcast.emit('chat message',data);
  });


  socket.on('feedback',(data)=>{
    socket.broadcast.emit('feedback',data);
  })
}
