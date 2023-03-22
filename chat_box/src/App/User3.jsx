import React, { useEffect, useRef, useState } from 'react'
import { socket } from "../socket";

function User3() {
  return (
    <div>
      <h3>User 3</h3>
      <form >
        <textarea type="text" name="mgs" rows={5}  />
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  )
}

export default User3