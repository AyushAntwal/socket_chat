import React, { useEffect, useRef, useState } from 'react'
import { initsocket } from "../socket";



function User2() {

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
      username: "User2",
      user: "Student",
      roomId : "EVENT2",
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