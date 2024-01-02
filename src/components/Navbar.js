import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
      <Link to="/">Home</Link>
      <Link to="/lineups">Lineups</Link>
      <Link to="/videos">Videos</Link>
      <button>Login</button>
      <button>Signup</button>
    </div>
  )
}

export default Navbar