import React, { useEffect, useRef, useState } from 'react'
import { initsocket } from "../socket";



function Admin() {
  const io = useRef(null);
  const [mesg, setMesg] = useState();
  const [event, setEvent] = useState();

  useEffect(() => {
    const init = async () => {
      io.current = await initsocket();
    }
    init();
  }, [])

  function HandelJoinEvent() {
    // io.current.emit("JOIN", {
    //   roomId: "EVENT1",
    //   user: "Admin",
    //   username: "CEO"
    // })
  }

  function HandelStartEvent() {
    io.current.emit("START", {
      event,
    })
  }
  function HandelPauseEvent() {
    io.current.emit("PAUSE", {
      event,
    })
  }
  function HandelEndEvent() {
    io.current.emit("END", {
      event,
    })
  }


  return (
    <div>
      <h3>Admin</h3>
      <div>
        {/* <textarer type="text" name="mgs" rows={5} onChange={e => setMesg(e.target.value)} /> */}
        <div>
        <select onChange={e => setEvent(e.target.value)}>
              <option>EVENT1</option>
              <option>EVENT2</option>
            </select><hr/>
          <button onClick={HandelStartEvent}>START EVENT</button>{"   "}
          <button onClick={HandelPauseEvent}>PAUSE EVENT</button>{"   "}
          <button onClick={HandelEndEvent}>PAUSE EVENT</button>{"   "}
        </div>
      </div>
    </div>
  )
}

export default Admin