import { io } from "socket.io-client";
const URL = "http://localhost:2100/";

export const socket = async () => {
  
  const options = {
    "force new connection": true,
    reconnectionAttempts: "infinity",
    timeout: 10000,
    transports: ["websocket"],
  }
  
  return io(URL,options);
};
