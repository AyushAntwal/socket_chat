import React, { useEffect, useRef, useState } from 'react'
import { socket } from "../socket";



function User2() {

  function HandelJoinEvent() {
    socket.emit("START", {
      roomId : "987654321",
    })
  }

  return (
    <div>
      <h3>User 2</h3>
      <div >
        <textarea type="text" name="mgs" rows={5}  />
        <div>
          <button onClick={HandelJoinEvent}>Join</button>
        </div>
      </div>
    </div>
  )
}

export default User2;