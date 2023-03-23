import React, { useEffect, useRef, useState } from 'react'
import { initsocket } from "../socket";



function Student() {
  const io = useRef(null);
  const chatBox = useRef()
  const [roomId, setRoomId] = useState();
  const [mesg, setMesg] = useState();

  useEffect(() => {
    const init = async () => {
      io.current = await initsocket();

      setRoomId(prompt("RoomID","EVENT1"))
      console.log(roomId);
      io.current.onAny((data)=>{
        console.log(data);
      })
      io.current.on("PAUSE",({message})=>{
        alert(message)
        document.getElementById("sendBtn").disabled  = true;
      })
      io.current.on("START",({message})=>{
        alert(message)
        document.getElementById("sendBtn").disabled  = false;
      })
 
    }
    init(); 
  }, [])
  function HandelJoinEvent() {
    io.current.emit("JOIN", {
      username: "User1",
      user: "Student",
      roomId,
    })
  }

  function HandelMessage(e) {
    io.current.emit("MESSAGE", {
      message: mesg,
    })
  }


  return (
    <div>
      <h3>STUDENT</h3>
      <div>
        <textarea type="text" name="mgs" rows={5} onChange={e => setMesg(e.target.value)} />
        <div>
          <button disabled={true} id='sendBtn' onClick={HandelMessage}>Send</button>
          <button onClick={HandelJoinEvent}>Join</button>
        </div>
      </div>
      <div>
        <div ref={chatBox}>
          <span>User : </span><span>This is a message</span>
        </div>
        <div>
          <span>User : </span> <span>This is a message</span>
        </div>
      </div>
    </div>
  )
}

export default Student