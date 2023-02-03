import React from 'react'
import { NavLink } from 'react-router-dom'

const User = ({ id, name, email, selectUser}) => {
  console.log('name', name)
  return (
      <div style={{border: '1px solid black', margin: '5px', paddingLeft: '10px'}}>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <NavLink to={name}>
          <button onClick={(name) => selectUser(name)}>Click Me</button>
        </NavLink>
      </div>
  )
}

export default User