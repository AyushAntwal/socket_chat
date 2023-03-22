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
const client = {}
io.on("connection", (socket) => {
  console.log("Successfuly Connected! : ", socket.id);
  var ID = "";
  socket.on("JOIN", () => {
    socket.on("START",({ roomId, username, user })=>{
      socket.join(roomId);
      client[socket.id] = {roomId , user , user};

      socket.to(roomId).emit("hello")
      console.log(client);
    })

    socket.on('disconnect', (socket) => {
      console.log('A user disconnected',socket);
    });
  });

 

  return () => {
    socket.off('disconnect', () => {
      console.log("Closed");
    })
  }
});