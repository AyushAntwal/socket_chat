import React, { useEffect, useRef, useState } from 'react'
import { socket } from "../socket";



function User2() {


  
  return (
    <div>
      <h3>User 2</h3>
      <form >
        <textarea type="text" name="mgs" rows={5}  />
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  )
}

export default User2;