import React, { useEffect, useRef, useState } from 'react'
import { socket } from "../socket";



function User3() {
  const [mesg, setMesg] = useState();
  useEffect(()=>{
    socket.emit('JOIN');
  })

  function HandelJoinEvent() {
    socket.emit("START", {
      username: "User3",
      roomId : "123456789",
      user : "Student"
    })
  }

  function HandelMessage(e) {
    socket.emit("MESSAGE", {
      message: mesg,
    })
  }


  return (
    <div>
      <h3>User 3</h3>
      <div>
        <textarea type="text" name="mgs" rows={5} onChange={e => setMesg(e.target.value)} />
        <div>
          <button onClick={HandelMessage}>Send</button>
          <button onClick={HandelJoinEvent}>Join</button>
        </div>
      </div>
    </div>
  )
}

export default User3