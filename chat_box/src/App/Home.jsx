import { socket } from "../socket";

import React from 'react'

function Home() {

  return (
    <div>
      <a href="/admin"><button>Admin</button></a>
      <br/>
      <a href="/user1"><button>User 1</button></a>
      <br/>
      <a href="/user2"><button>User 2</button></a>
      <br/>
      <a href="/user3"><button>User 3</button></a>
    </div>
  )
}

export default Home