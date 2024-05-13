import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props){
    return <>
             <nav className={`navbar navbar-expand-lg ${props.darkMode?"navbar-light bg-light":"navbar-dark bg-dark"}`}>
   <div className="container-fluid">
   <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        
      </ul>
    
    </div>
    <div className="form-check form-switch">
  <input onChange={props.setDarkMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label style={{color:!props.darkMode?"white":"black"} }className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {!props.darkMode?"Dark Mode":"Light Mode"}</label>
</div>
  </div>
</nav> 
    </>
}
export default NavBar