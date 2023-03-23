const PORT = process.env.PORT || 2100;
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  autoConnect: false,
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.get("/", (req, res) => {
  res.send("hello Server!");
})

server.listen(PORT, () => {
  console.log(`Server is Running over port ${PORT} with The SOCKET`);
});
const client = [];
io.on("connection", (socket) => {  
  socket.on("JOIN", ({ roomId, username, user }) => {
    client[socket.id] = {roomId , username , user};
    socket.join(roomId);

    // socket.to(socket.id).emit("DATA",client)


    socket.broadcast.emit("INFO"); 
    // console.log(client); 
    socket.on('disconnect', () => {
      console.log('A user disconnected',socket.id);
      delete client[socket.id];
    });
  });
 
  socket.on("START",({event})=>{
    console.log(event);
    socket.in(event).emit("START",{
      message : "Event is Started!!!"
    });
  })
  socket.on("PAUSE",({event})=>{
    console.log(event);
    socket.in(event).emit("PAUSE",{
      message : "Event is Paused!!!"
    });
  })




  return () => {
    socket.off('disconnect', () => {
      console.log("Closed");
      client = [];
    })
  }
});