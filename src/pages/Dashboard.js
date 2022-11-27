import React, { useContext } from 'react'
import { AuthContext } from '../contexts/UserContext'

function Dashboard() {
  const {role} = useContext(AuthContext)

  if(role==="buyer"){
    return (<div>My products</div>)
  }
  if(role==="seller"){
    return (<div><ul>
      <li>Add a product</li>
      <li>My products</li>
      <li>My buyers</li>
    </ul></div>)
  }
  if(role==="admin"){
    return (<div>
      <ul>
        <li>All sellers</li>
        <li>All buyers</li>
        <li>Reported items</li>
      </ul>
    </div>)
  }
  
}

export default Dashboard