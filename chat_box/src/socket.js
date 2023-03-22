import { io } from "socket.io-client";
const URL = "http://localhost:2100/";

export const socket = io(URL, {
  "force new connection": true,
  reconnectionAttempts: "infinity",
  timeout: 10000,
  transports: ["websocket"],
});

// io.on('connect_failed', (err) => {
//   console.log(err);
// });
// io.on('connect_error', (err) => {
//   console.log(err);
// });

