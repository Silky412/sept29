import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-flex">
      <a class="navbar-brand" href="#">Navbar</a>
     
     
       
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className="nav-item ">
            <Link to='/first'className='nav-link'>FIRST</Link>
          </li>
          <li className="nav-item ">
            <Link to='/second'className='nav-link'>SECOND</Link>
          </li>
             
            </ul>
        
    </div>
  </nav>
    
  )
}
