import React, { useEffect, useRef, useState } from 'react'
import { socket } from "../socket";



function Admin() {
  const [mesg, setMesg] = useState();

  useEffect(()=>{
     socket.emit("JOIN")
  },[])
  function HandelStartEvent() {
    socket.emit("START", {
      roomId : "123456789",
      user : "Admin",
      username : "CEO"
    })
  }


  return (
    <div>
      <h3>Admin</h3>
      <div>
        {/* <textarer type="text" name="mgs" rows={5} onChange={e => setMesg(e.target.value)} /> */}
        <div>
          <button onClick={HandelStartEvent}>START EVENT</button>
        </div>
      </div>
    </div>
  )
}

export default Admin