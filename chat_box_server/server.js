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

app.get("/",(req,res)=>{
  res.send("hello Server!");
})

server.listen(PORT, () => {
  console.log(`Server is Running over port ${PORT} with The SOCKET`);
});

io.on("connection", (socket) => {
  console.log("Successfuly Connected! : ",socket.id);

  socket.on("MESSAGE", (data)=>{
    console.log(data);
    socket.broadcast.emit("MESSAGE",data);
  });

  socket.on('disconnect', function () {
    console.log('A user disconnected');
 });

 return ()=> {
  socket.off('disconnect', function (){
    console.log("Closed");
  })
 }
});