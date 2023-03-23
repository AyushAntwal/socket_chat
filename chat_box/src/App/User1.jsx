import React, { useEffect, useRef, useState } from 'react'
import { initsocket } from "../socket";



function User1() {
  const io = useRef(null);
  const [mesg, setMesg] = useState();

  useEffect(() => {
    const init = async () => {
      io.current = await initsocket();

      io.current.onAny((data)=>{
        console.log(data);
      })
 
    }
    init(); 
  }, [])
  function HandelJoinEvent() {
    io.current.emit("JOIN", {
      username: "User1",
      user: "Student",
      roomId : "EVENT1",
    })
  }

  // function HandelMessage(e) {
  //   socket.emit("MESSAGE", {
  //     message: mesg,
  //   })
  // }


  return (
    <div>
      <h3>User 1</h3>
      <div>
        <textarea type="text" name="mgs" rows={5} onChange={e => setMesg(e.target.value)} />
        <div>
          {/* <button onClick={HandelMessage}>Send</button> */}
          <button onClick={HandelJoinEvent}>Join</button>
        </div>
      </div>
    </div>
  )
}

export default User1