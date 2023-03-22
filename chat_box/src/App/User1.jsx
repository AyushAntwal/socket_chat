import React, { useEffect, useRef, useState } from 'react'
import { socket } from "../socket";



function User1() {

  const io = useRef(null);
  useEffect(()=>{
    io.current = socket();
  },[socket])

  const [mesg, setMesg] = useState();
  function HandelMessage(e) {
    io.emit("MESSAGE", {
      message: mesg,
    })
  }


  return (
    <div>
      <h3>User 1</h3>
      <form >
        <textarea type="text" name="mgs" rows={5} onChange={e => setMesg(e.target.value)} />
        <div>
          <button onClick={HandelMessage}>Send</button>
        </div>
      </form>
    </div>
  )
}

export default User1